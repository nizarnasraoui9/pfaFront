import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
  }


  signIn(): void {
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
