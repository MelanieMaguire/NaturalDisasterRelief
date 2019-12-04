import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Post } from './post';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private dbPath = '/help-forum';

    searchText: string;
    searching: boolean=false;
    filteredRef: AngularFireList<Post> = null;

    constructor(private db: AngularFireDatabase) {
        this.filteredRef = db.list(this.dbPath);
    }

    updateSearching(isSearch: boolean, text: string){
        this.searching = isSearch;
        this.searchText = text;
    }
    
    getSearchString(): string{
        return this.searchText;
    }

    getFilterList(): AngularFireList<Post>{
        //filter the reference based on text
        return this.filteredRef;
    }


}