import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { HelpForumService } from '../help-forum.service';

@Component({
  selector: 'app-help-forum-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
})
export class RequestHelpComponent implements OnInit {

  post: Post = new Post();
  tempTag: string;
  title: string;
  body: string;
  location: string;
  tags: string[];
  incomplete: boolean;
  clickSubmit: boolean;
  tagsMade: boolean;

  constructor(private helpForumService: HelpForumService) { }

  ngOnInit() {
    this.incomplete = false;
    this.tagsMade = false;
  }

  newPost(): void {
    this.post = new Post();
  }
 
  save() {
    this.post.username = "defaultUser";
    if(this.tags == undefined){
      this.post.tags = [""];
    }
    else{
      this.post.tags = this.tags;
    }
    this.helpForumService.createPost(this.post);
    this.post = new Post();
  }

  addTag(tag: string){
    console.log("add called tag is: ", this.tempTag);
    if(this.tempTag != undefined && this.tempTag.trim().length > 0){
      console.log("add A", this.tagsMade);
      this.tagsMade = true;
      if(this.tags == undefined){
        this.tags = [this.tempTag];
        console.log("add B", this.tagsMade);
      }
      else {
        this.tags.push(this.tempTag);
        console.log("add C", this.tagsMade);
      }
    } else {
      this.tagsMade = false;
      console.log("add D", this.tagsMade);
    }
    console.log("add called ended", this.tagsMade);
  }

  removeTag(){
    console.log("remove called", this.tagsMade);
    if(this.tags != undefined && this.tags.length != 0){
      this.tags.pop();
      if(this.tags.length == 0){
        this.tagsMade = false;
      }
    }
  }
 
  submitPost() {
    console.log("submit called");
    if(this.post.title == undefined || this.post.body == undefined 
      || this.post.location == undefined || this.post.title.length < 0 
      || this.post.location.length < 0 || this.post.body.length < 0){
      this.incomplete = true;
    }
    else {
      this.incomplete = false;
      this.save();
    }
  }
}
