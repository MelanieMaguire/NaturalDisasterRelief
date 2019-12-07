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

  /*checkCredentials(email: string, password: string): void {

    // if both of these are true

  this.userRef.orderByChild("email").equalTo(this.email).on("child_added", function(snapshot) {
    console.log(snapshot.key);
  }
    // https://stackoverflow.com/questions/40471284/firebase-search-by-child-value
  }*/
}
