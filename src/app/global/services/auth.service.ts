import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(tokenData:any):void {
  	localStorage.setItem('token', JSON.stringify(tokenData));
  }

  getToken():any {
  	return localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : false;
  }

  clearToken():void {
  	localStorage.removeItem('token');
  }

  isLoggedIn():boolean {
  	return this.getToken() ? true : false;
  }
}
