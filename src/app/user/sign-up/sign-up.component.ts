import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  newUser(): void {
        this.submitted = false;
        this.user = new User();
  }

  saveUser() {
        this.userService.createUser(this.user);
        this.user = new User();
  }

  onSubmit() {
    this.submitted = true;
    this.saveUser();
  }

}
