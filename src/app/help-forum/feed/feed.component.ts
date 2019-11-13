import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-forum-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts = [];

  constructor() { }

  ngOnInit() {
  }

}
