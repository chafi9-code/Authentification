import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  public logIn (userData: User) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
  
  public isLoged () {
    return localStorage.getItem('ACCESS_TOKEN') !==null;
  }

  public unlog() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
