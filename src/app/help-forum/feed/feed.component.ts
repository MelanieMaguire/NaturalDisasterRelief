import { Component, OnInit } from '@angular/core';
import { HelpForumService } from '../help-forum.service';
import { map } from 'rxjs/operators';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-help-forum-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any;
  filteredPosts: any;
  searchText: string;

  constructor(private helpForumService: HelpForumService,
    private searchService: SearchService) {
      this.searchService.searchChanged.subscribe((data: string) => {
        console.log("SearchData", data)
        this.searchText = data;
      });
  }

  ngOnInit() {
    this.getPostsList();
    this.getFilterList();
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

  getFilterList(){
    this.searchService.getFilterList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(posts => {
      this.filteredPosts = posts;
    });
  }
 
  deletePosts() {
    this.helpForumService.deleteAll().catch(err => console.log(err));
  }

}
