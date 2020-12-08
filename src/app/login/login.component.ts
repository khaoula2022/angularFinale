import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_group: FormGroup;
  constructor(private auth: UserService, private router: Router)
  {
    this.login_group = new FormGroup({
      username  : new FormControl(['',Validators.required]) ,
      password: new FormControl(['',Validators.required])
  });
  }

  ngOnInit(): void {
  }

  get username() { return this.login_group.get('username'); }
  get password() { return this.login_group.get('password'); }

  login() {
    const val = this.login_group.value;

    if (val.username && val.password) {
        this.auth.login(val.username, val.password)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    alert ( "welcome" + val.username )
                    //this.router.navigateByUrl('/home');
                }
            );
    }
}


}
