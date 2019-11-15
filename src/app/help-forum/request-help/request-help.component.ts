import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { Post } from '../post';
import { HelpForumService } from '../help-forum.service';

@Component({
  selector: 'app-help-forum-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
  
})
export class RequestHelpComponent implements OnInit {

  post: Post = new Post();
  submitted = false;

  constructor(private helpForumService: HelpForumService) { }

  ngOnInit() {
  }

  newPost(): void {
    this.submitted = false;
    this.post = new Post();
  }
 
  save() {
    this.helpForumService.createPost(this.post);
    this.post = new Post();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
