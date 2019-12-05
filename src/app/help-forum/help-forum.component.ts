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
  postClicked: boolean;
  postFlagged: boolean;
  post: Post;
  comments: Comment[];
  private loadProvide=false;
  private loadRequest=false;
  
  constructor(private helpForumService: HelpForumService) {
    this.helpForumService.postClicked.subscribe((data: Post) => {
      this.postClicked = true;
      this.post = data;
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
    
  }

  comment(){

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
