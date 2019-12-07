import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private dbPath = '/user';
  userRef: AngularFireList<User> = null;

  constructor(private db: AngularFireDatabase) {
    this.userRef = db.list(this.dbPath);
  }

  createUser(user: User): void {
    this.userRef.push(user);
  }

  checkCredentials(user): {

    // if both of these are true

    this.userRef.child('user').orderByChild('email').equalTo().on("value", function(snapshot)) {}  // supposed to return true if match
    this.userRef.child('user').orderByChild('password').equalTo(form.value.password).on("value", function(snapshot)) {} // supposed to return true if match

    // https://stackoverflow.com/questions/40471284/firebase-search-by-child-value
    }
  }
}
