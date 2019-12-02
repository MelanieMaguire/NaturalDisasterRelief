import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-help-forum-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string;
  testSearch: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchText = "";
  }

  search(){
    if(this.searchText.length < 2 || this.searchText.trim().length < 2){ //if text is whitespace or is single char
      this.testSearch = "Not enough text";
    }
    else{
      this.testSearch = this.searchText;
      this.searchService.searchChanged.emit(
        {data: this.searchText});
    }
  }

}
