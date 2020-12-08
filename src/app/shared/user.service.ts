import { Router } from '@angular/router';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient , private router : Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  url ='http://localhost:3000/users/';
  list: User[] = [];
  i: number = 0;
isLogged= false ;

  Register(u : User){
    return this.http.post(this.url, u);
   }


  /* login(username: string, password: string) {
    for (this.i = 0; this.i < this.list.length; this.i++)
      if ((this.list[this.i].username!= username || this.list[this.i].password == null))
      {

      }
      else



        this.router.navigate(['home']);
      return this.http.post<User>(this.url, [username, password], this.httpOptions);



  }*/

}
