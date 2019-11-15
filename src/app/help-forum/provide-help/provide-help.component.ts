import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-forum-provide-help',
  templateUrl: './provide-help.component.html',
  styleUrls: ['./provide-help.component.css']
})
export class ProvideHelpComponent implements OnInit {

  tags: string[]

  constructor() { }

  ngOnInit() {
    this.tags= ["location","tag", "title"];
  }

}
