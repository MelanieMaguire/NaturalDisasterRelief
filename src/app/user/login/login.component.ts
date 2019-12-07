import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  email = "";
  password = "";

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  /*onSubmit() {
    this.userService.checkCredentials(this.email, this.password);   // pass in email and password from form and check credentials
    this.submitted = true;
  }*/
}
