import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public error: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.error =true;
  }


  signIn(): void {
    let authenticated: boolean;
    authenticated=true;
    if(authenticated){
      this.router.navigate(['/main'], { queryParams: {} });
    }
    else{
      this.error = false;
    }

  }
}
