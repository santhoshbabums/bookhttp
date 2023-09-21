import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor( private __auth : AuthService, private router : Router){}

  loginForm :any;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  loginUser(){
    console.log(this.loginForm.value)
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.__auth.loginUser(email,password)
  }


}
