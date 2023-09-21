import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';
import * as firebase from 'firebase/app'
import 'firebase/auth';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public __auth :AuthService,){}
  
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyDD7Oa1VsnxpD4XMn64ent3OdTtDo_5A_A',
    };
    firebase.initializeApp(firebaseConfig);
    console.log("is Auth check",this.__auth.isAuth())
  }

  logout(){
    this.__auth.logout();
  }
  
}
