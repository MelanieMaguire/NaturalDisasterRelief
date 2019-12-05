import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Post } from './post';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private dbPath = '/help-forum';

    filteredRef: AngularFireList<Post> = null;

    constructor(private db: AngularFireDatabase) {
        this.filteredRef = db.list(this.dbPath);
    }

    //https://stackoverflow.com/questions/49008913/invoke-a-function-in-a-sibling-component-when-an-event-happens-in-current-compon
    @Output() public searchChanged: EventEmitter<any> = new EventEmitter();
    @Output() public getFilterFlag: EventEmitter<any> = new EventEmitter();

    getFilterList(): AngularFireList<Post>{
        //filter the reference based on text
        return this.filteredRef;
    }


}