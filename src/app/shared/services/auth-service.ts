import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements  CanActivate {
  user: any;
  constructor(public loginService: LoginService, public router: Router) {}
  canActivate(): boolean {
    this.user = JSON.parse(localStorage.getItem('userCurrent'));
    if (this.user) {
      return true;
    }
   this.router.navigate(['home']);
   return false; 
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
