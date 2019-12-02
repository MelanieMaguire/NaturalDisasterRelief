import { Component, OnInit } from '@angular/core';
import { HelpForumService } from './help-forum.service';
import { Post } from './post';

@Component({
  selector: 'app-help-forum',
  templateUrl: './help-forum.component.html',
  styleUrls: ['./help-forum.component.css']
})
export class HelpForumComponent implements OnInit {

  private loadProvide=false;
  private loadRequest=false;
  post: Post;
  postClicked: boolean;


  constructor(private helpForumService: HelpForumService) {
    this.helpForumService.postClicked.subscribe((data: Post) => {
      this.post = data
      this.postClicked = true;
    });
  }

  ngOnInit() {
    this.postClicked = false;
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
