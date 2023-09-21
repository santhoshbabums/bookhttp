import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private __http : HttpClient , private __auth :AuthService) {}

  bookStore(books:any[]){
    const tk = this.__auth.getToken();
    console.log(books)
     return this.__http.post("https://myhttp-9ae2a-default-rtdb.firebaseio.com/data.json?auth="+tk,books)
  }

  getBookDetails(){
    const tk = this.__auth.getToken();
    return this.__http.get("https://myhttp-9ae2a-default-rtdb.firebaseio.com/data.json?auth="+tk)
  }
}
