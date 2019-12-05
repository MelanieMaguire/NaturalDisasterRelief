import { Component, OnInit } from '@angular/core';
import { HelpForumService } from './help-forum.service';
import { Post } from './post';
import { Comment } from './comment'

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
  areComments: boolean;
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
      }
    });
  }

  ngOnInit() {
    this.postClicked = false;
  }

  backToFeed(){
    this.postClicked = false;
  }

  flagPost(){
    if(this.postFlagged == true){
      this.postFlagged = false;
    } else {
      this.postFlagged = true;
    }
  }

  submitComplaint(){ //user who made it, post key, flag reason,
    this.postFlagged = false;
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
