import { Component, OnInit } from '@angular/core';
import { HelpForumService } from './help-forum.service';
import { Post } from './post';
import { Comment } from './comment'
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-help-forum',
  templateUrl: './help-forum.component.html',
  styleUrls: ['./help-forum.component.css']
})
export class HelpForumComponent implements OnInit {

  reasonText: string;
  commentText: string;
  postClicked: boolean;
  postFlagged: boolean;
  canSolve: boolean;
  solvedClicked: boolean;
  areComments: boolean;
  currentUser: string;
  post: Post;
  tempComment: Comment;
  comments: Comment[];
  private loadProvide=false;
  private loadRequest=false;
  
  constructor(private helpForumService: HelpForumService) {
    this.helpForumService.postClicked.subscribe((data: Post) => {
      this.postClicked = true;
      this.post = data;
      if(this.post.comments == undefined){
        this.areComments = false;
      } else {
        this.areComments = true;
        this.comments = this.post.comments;
      }
      if(this.post.username == this.currentUser){
        this.canSolve = true;
      } else{
        this.canSolve = false;
      }
    });
  }

  ngOnInit() {
    this.postClicked = false;
    this.postFlagged = false;
    this.canSolve = false;
    this.currentUser = "ActualBaby";
  }

  backToFeed(){
    this.postClicked = false;
    this.postFlagged = false;
    this.solvedClicked = false;
    this.canSolve = false;
  }

  flagPost(){
    if(this.postFlagged == true){
      this.postFlagged = false;
    } else {
      this.postFlagged = true;
    }
  }

  submitComplaint(){ //user who made it, post key, flag reason,
    if(this.reasonText != undefined && this.reasonText.trim().length != 0) {
      if(this.post.flagReasons == undefined){
        this.post.flagReasons = [this.reasonText];
      } else {
        this.post.flagReasons.push(this.reasonText);
      }
      this.helpForumService
      .updatePost(this.post.key, { flagReasons: this.post.flagReasons })
      .catch(err => console.log(err));
      this.postFlagged = false;
    }
  }

  solved(){
    if(this.solvedClicked){
      this.solvedClicked = false;
    }
    else{
      this.solvedClicked = true;
    }
  }

  confirmSolved(){
    this.helpForumService
    .deletePost(this.post.key)
    .catch(err => console.log(err));
    this.postClicked = false;
  }

  comment(){
    if(this.commentText != undefined){
      this.areComments = true;
      this.tempComment = new Comment();
      this.tempComment.username = "Commenter";
      this.tempComment.body = this.commentText;
      this.commentText = "";
      if(this.comments == undefined){
        this.comments = [this.tempComment];
      } else {
        this.comments.push(this.tempComment);
      }
      this.helpForumService
      .updatePost(this.post.key, { comments: this.comments })
      .catch(err => console.log(err));
    }
  }

  clickRequest() {
    if(this.loadRequest==true){
      this.loadRequest=false;
      this.loadProvide=false;
    }
    else{
      this.loadRequest=true;
      this.loadProvide=false;
    }
  }

  clickProvide(){
    if(this.loadProvide==true){
      this.loadRequest=false;
      this.loadProvide=false;
    }
    else{
      this.loadRequest=false;
      this.loadProvide=true;
    }
  }

}
