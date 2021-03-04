import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

class ActivatedRouter {
}

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  signIn(): void {
    this.router.navigate(['/main'], { queryParams: {} });
  }
}
