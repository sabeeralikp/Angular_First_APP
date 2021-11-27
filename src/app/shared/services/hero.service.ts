import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Posts } from '../interface/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { 

  }
  justConsole(){
   
   let url = 'https://jsonplaceholder.typicode.com/posts';
   return this.http.get<Posts[]>(url);
    
  }
}
