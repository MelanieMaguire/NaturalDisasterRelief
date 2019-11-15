import { Component, OnInit , Input} from '@angular/core';
import { HelpForumService } from '../help-forum.service';
import { Post } from '../post';

@Component({
  selector: 'app-help-forum-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private helpForumService: HelpForumService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.helpForumService
      .updatePost(this.post.key, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deletePost() {
    this.helpForumService
      .deletePost(this.post.key)
      .catch(err => console.log(err));
  }

}
