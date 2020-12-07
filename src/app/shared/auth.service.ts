import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { Observable , of  } from 'rxjs';
@Injectable()
export class AuthService {
  user$ : Observable<User>;

constructor(private router: Router ) {



  }
 async googleSignIn()
  {

  }

}
