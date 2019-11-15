import { Component, OnInit } from '@angular/core';
import { HelpForumService } from '../help-forum.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-help-forum-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any;

  constructor(private helpForumService: HelpForumService) { }

  ngOnInit() {
    this.getPostsList();
  }

  getPostsList() {
    this.helpForumService.getPostsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(posts => {
      this.posts = posts;
    });
  }
 
  deletePosts() {
    this.helpForumService.deleteAll().catch(err => console.log(err));
  }

}
