import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';



@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public error: boolean;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.error = true;
    console.log('ici');
    const obs = this.http.get('http://localhost:8080/veuve/1');
    obs.subscribe((response)=>{
      console.log('respones');
      console.log(response);
    });

  }


  signIn(): void {
    let username: string;
    let password: string;
    username='ali';
    password='0000';
    let path: string;
    path = 'localhost:8080/admin/' + username + '/' + password;
    console.log(path);
    this.http.get(path).subscribe(data => {
      console.log(data);
    });
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
