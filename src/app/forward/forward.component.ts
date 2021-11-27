import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../shared/interface/login.interface';
import { Posts } from '../shared/interface/posts.interface';
import { Temp } from '../shared/interface/temp.interface';
import { HeroService } from '../shared/services/hero.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
ELEMENT_DATA;

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.css'],
})
export class ForwardComponent implements OnInit {
  state: Login;
  data: Posts[] = [];
  temp: any[] = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private router: Router, private api: HeroService) {
    this.state = this.router.getCurrentNavigation()?.extras.state as Login;
  }

  ngOnInit(): void {
    console.log(this.state);
    this.getData();
  }

  dataSource = ELEMENT_DATA;
  back() {
    this.router.navigateByUrl('home');
  }
  getData() {
    this.api.justConsole().subscribe((data) => {
      console.log(data);
      this.data = data;
      const unique = [...new Set(data.map((v) => v.userId))];
      for (let index = 0; index < unique.length; index++) {
        this.temp.push({ id: index, data: [] });
        data.filter((x) => {
          if (x.userId == unique[index]) {
            this.temp[index].data.push(x);
          }
        });
      }
      console.log(this.temp);
    });
  }
}
