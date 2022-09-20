import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn() {
    //logic
    if(localStorage.getItem('loginPassword')==localStorage.getItem('password')
    && localStorage.getItem('loginUserName')==localStorage.getItem('userName')) {
      return true;
    } 
    else{
    return false;
  }
}
}
