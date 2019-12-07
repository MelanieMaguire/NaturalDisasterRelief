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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  /*onSubmit(form: NgForm) {
    this.userService.checkCredentials(form.value.email, form.value.password);   // pass in email and password from form and check credentials
    this.submitted = true;
  }*/
}
