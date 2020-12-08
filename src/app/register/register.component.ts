import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private service : UserService , private router : Router) { }
user : User;
Users: User[];
  ngOnInit(): void {

    this.user= new User();
  }

  save() {
    this.service.Register(this.user).subscribe(
      () => this.Users = [this.user, ...this.Users]
    );
   }

   save2() {

    this.router.navigate(['login']);
   }


   }

