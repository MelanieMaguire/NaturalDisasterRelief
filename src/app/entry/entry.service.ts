import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Entry } from './entry';


@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private dbPath = '/entry';
  entryRef: AngularFireList<Entry> = null;

  constructor(private db: AngularFireDatabase) {
    this.entryRef = db.list(this.dbPath);
  }
  createEntry(entry: Entry): void {
    this.entryRef.push(entry);
  }
  deleteEntry(key: string): Promise<void> {
    return this.entryRef.remove(key);
  }
  getEntryList(): AngularFireList<Entry> {
    return this.entryRef;
  }

}

/* I followed an example from
https://grokonez.com/frontend/angular/angular-8/angular-8-firebase-tutorial-crud-operations-angular-fire-example
to help me figure out how to create a class for user entries that included all required data and how
 to do all the necessary operations (Create/Delete/Update) */

