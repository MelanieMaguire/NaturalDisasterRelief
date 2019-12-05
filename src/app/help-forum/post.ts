import { Comment } from './comment';

export class Post { //followed https://grokonez.com/frontend/angular/angular-8/angular-8-firebase-tutorial-crud-operations-angular-fire-example
    //fr firebase implementation
    key: string;
    username: string;
    title: string;
    body: string;
    comments: Comment[];
    tags: string[];
    location: string;
}