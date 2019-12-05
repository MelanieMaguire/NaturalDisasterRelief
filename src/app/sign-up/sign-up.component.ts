import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }

    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;
    const address = form.value.address;
    const city = form.value.city;
    const country = form.value.country;
    const state = form.value.state;
    const zip = form.value.zip;

    this.authService.signup(email, password).subscribe(responseData => {
      console.log(responseData);
    }, error => {
        console.log(error);
    });

    form.reset();
  }
}
