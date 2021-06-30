import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.username);
    console.log(this.password);
    this.authenticationService.addAdmin(this.username, this.password).subscribe((response) => {
      console.log(response);
    });
  }
}
