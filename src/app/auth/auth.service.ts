import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentToken : any;

  constructor(private router : Router) { }
  registerUser( email : string , password :string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log('register response :',userCredential)
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }


  loginUser( email : string , password :string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // token always get while user logins
        this.getToken();
        console.log('login response:',userCredential)
        const user = userCredential.user;
        this.router.navigate(['/book'])

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  getToken(){
    const auth = getAuth().currentUser?.getIdToken()
    .then((token) =>{
      this.currentToken = token;
      console.log('current token',this.currentToken)
    }).catch( error =>{
      console.log( 'Token Error :', error)
    })
    
    return this.currentToken;
  }

  isAuth(){
    let tStatus = false ;
    if(this.currentToken){
      tStatus = true
    }
    return tStatus;
  }

  logout(){
    this.router.navigate(['/login'])
    const auth = getAuth()
    auth.signOut()
    this.currentToken = null;
  }
}
