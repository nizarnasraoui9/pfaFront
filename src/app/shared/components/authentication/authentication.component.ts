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
  username: string;
  password: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    /*
    console.log('ici');
    const obs = this.http.get('http://localhost:8080/admin/ali/0000');
    obs.subscribe((response) => {
      console.log(typeof (response));
      const obj = JSON.stringify(response);
      console.log(obj);

    });*/

  }


  signIn(): void {
    let username: string;
    let password: string;
    username = 'ali';
    password = '0000';
    let path: string;
    path = 'http://localhost:8080/admin/' + this.username + '/' + this.password;
    console.log(path);
    const obs = this.http.get(path);
    obs.subscribe((response) => {
      if (response === true){
        this.router.navigate(['/main'], { queryParams: {} });
      }
      else{
        this.error =  true;
      }

    });
  }
}
