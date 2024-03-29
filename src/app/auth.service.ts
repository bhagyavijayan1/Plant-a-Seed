import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = `http://localhost:5000/signup`;
  private _loginUrl = `http://localhost:5000/signup/login`;



  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post(this._registerUrl, user);
  }

  loginUser(user){
    return this.http.post(this._loginUrl, user);
  }

  loggedIn(){
    return  !!localStorage.getItem('token');
}
}
