import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../shared/services/hero.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  loginForm:FormGroup

  constructor(
    private router: Router,
    private fb:FormBuilder,
    public snackBar: MatSnackBar,
    
  ){
    this.loginForm = this.formbuild();
    
  }


  ngOnInit(){
    
  }
  title = 'SAB@gmail.com'
  // email = new FormControl('');
  // password = new FormControl('');
  
  formbuild(){
   return this.fb.group({
      email: ['',[Validators.required, Validators.minLength(8),],],
      password: ['',[Validators.required, Validators.minLength(8),],]
    })
  }

  goForward(){
    console.log(this.loginForm.valid);

    // this.loginForm.get('email')?.hasError
    

    if(this.loginForm.valid &&
       this.loginForm.get('email')?.value == 'sabeeralikp233@gmail.com'&&
       this.loginForm.get('password')?.value == 'asdfghjkl') {
      this.router.navigateByUrl('forward', {state: this.loginForm.value});
    }

    else {
this.showNofication('invalid', 1000)
    }
  
  }
  

  showNofication(content: string,duration: number) {
    this.snackBar.open(content, ' ', {
      duration: duration,
      verticalPosition: "bottom", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" ,// Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
      panelClass:'snackbar-danger',

    });
  }

}
