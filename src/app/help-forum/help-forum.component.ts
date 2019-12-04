import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-forum',
  templateUrl: './help-forum.component.html',
  styleUrls: ['./help-forum.component.css']
})
export class HelpForumComponent implements OnInit {

  private loadProvide=false;
  private loadRequest=false;

  constructor() {
   }

  ngOnInit() {
  }

  clickRequest() {
    this.loadRequest=true;
    this.loadProvide=false;
  }

  clickProvide(){
    this.loadRequest=false;
    this.loadProvide=true;
  }

}
