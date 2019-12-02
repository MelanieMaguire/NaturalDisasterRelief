import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Post } from './post'

@Injectable({
    providedIn: 'root'
})
export class HelpForumService {
    private dbPath = '/help-forum';

    postsRef: AngularFireList<Post> = null;

    constructor(private db: AngularFireDatabase) {
        this.postsRef = db.list(this.dbPath 
        );//edit to order by timestamp
    }

    createPost(post: Post): void {
        this.postsRef.push(post);
      }
     
    updatePost(key: string, value: any): Promise<void> {
      return this.postsRef.update(key, value);
    }
    
    deletePost(key: string): Promise<void> {
      return this.postsRef.remove(key);
    }
    
    getPostsList(): AngularFireList<Post> {
      return this.postsRef;
    }
    
    deleteAll(): Promise<void> {
      return this.postsRef.remove();
    }

}