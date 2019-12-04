import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mia',
  templateUrl: './mia.component.html',
  styleUrls: ['./mia.component.css']
})
export class MiaComponent  {
  fullname = '';
  age = '';
  gender = '';
  height = '';
  weight = '';
  haircolor = '';
  eyecolor = '';
  location = '';
  contact = '';
  picture = '';
  entry: Observable<any[]>;


  constructor(public db: AngularFireDatabase) {
    this.entry = db.list('entry').valueChanges();
  }


  onSubmit() {
    this.db.list('entry').push({name: this.fullname});
    this.db.list('entry').push({age: this.age});
    this.db.list('entry').push({gender: this.gender});
    this.db.list('entry').push({height: this.height});
    this.db.list('entry').push({weight: this.weight});
    this.db.list('entry').push({haircolor: this.haircolor});
    this.db.list('entry').push({eyecolor: this.eyecolor});
    this.db.list('entry').push({location: this.location});
    this.db.list('entry').push({contact: this.contact});
    this.db.list('entry').push({picture: this.picture});

    // vv this resets the fields to holding no information
    this.fullname = '';
    this.age = '';
    this.gender = '';
    this.height = '';
    this.weight = '';
    this.haircolor = '';
    this.eyecolor = '';
    this.location = '';
    this.contact = '';
    this.picture = '';
  }


}


