import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-help-forum-provide-help',
  templateUrl: './provide-help.component.html',
  styleUrls: ['./provide-help.component.css']
})
export class ProvideHelpComponent implements OnInit {

  selected: string;
  values: string[];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.values = ["Title", "Tag", "User", "Content", "Location"];
  }

  changeSelected(event: MatRadioChange){
    if(event.value == "Title"){
      this.searchService.getFilterFlag.emit(1);
    }
    else if(event.value == "Tag"){
      this.searchService.getFilterFlag.emit(2);
    }
    else if(event.value == "User"){
      this.searchService.getFilterFlag.emit(3);
    }
    else if(event.value == "Content"){
      this.searchService.getFilterFlag.emit(4);
    }
    else {
      this.searchService.getFilterFlag.emit(5);
    }
  }

}
