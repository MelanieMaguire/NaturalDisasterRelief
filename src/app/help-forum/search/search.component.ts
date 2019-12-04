import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-help-forum-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchText = "";
  }

  search(){
    if(this.searchText == ""){
      this.searchService.updateSearching(false, "");
    }
    else if(this.searchText.trim() == "" || this.searchText.length < 2 ){ //if text is whitespace or single char will return empty search result
      this.searchService.updateSearching(true, "");
    }
    else{
      this.searchService.updateSearching(true, this.searchText);
    }
  }

}
