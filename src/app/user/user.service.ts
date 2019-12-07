import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private dbPath = '/user';
  userRef: AngularFireList<User> = null;
  correctEmail = false;
  correctPassword = false;


  constructor(private db: AngularFireDatabase) {
    this.userRef = db.list(this.dbPath);
  }

  createUser(user: User): void {
    this.userRef.push(user);
  }

  /*checkCredentials(email: string, password: string): {

    // if both of these are true

    this.userRef.child('user').orderByChild('email').equalTo(email) {
      correctEmail = true;
    }

    this.userRef.child('user').orderByChild('password').equalTo(password).on("value", function(snapshot)) {
      correctPassword = true;
    }

    if(correctEmail == correctPassword)
      return true;
      }*/

    // https://stackoverflow.com/questions/40471284/firebase-search-by-child-value

}
