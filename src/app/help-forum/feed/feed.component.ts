import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-forum-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  private posts = [];

  constructor() { }

  ngOnInit() {
  }

  addPost(){ //from https://stackoverflow.com/questions/52544636/how-to-create-existing-component-multiple-times-on-button-click-angular
    this.posts = [ ...this.posts, this.posts.length]
  }

}
