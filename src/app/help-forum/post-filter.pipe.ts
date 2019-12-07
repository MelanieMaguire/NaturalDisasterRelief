import { PipeTransform, Pipe } from '@angular/core';
import { Post } from '../help-forum/post';

@Pipe({
    name: 'postFilter'
})

export class PostFilterPipe implements PipeTransform {
    transform(posts: any, searchText: string, filterFlag: number): any {
        if(!posts || !searchText || searchText.length < 2){
            return posts;
        }
       if(filterFlag == 1){ //title
            return posts.filter(post => 
                post.title.toLowerCase().indexOf(
                    searchText.toLowerCase()) !== -1);
       }
       else if (filterFlag == 2) { //tag
            return posts.filter(post => 
                post.tags.indexOf(
                    searchText.toLowerCase()) !== -1);
       }
       else if (filterFlag == 3) { //user
            return posts.filter(post => 
                post.username.toLowerCase().indexOf(
                    searchText.toLowerCase()) !== -1);
       }
       else if (filterFlag == 4) { //content
            return posts.filter(post => 
                post.body.toLowerCase().indexOf(
                    searchText.toLowerCase()) !== -1);
       }
       else{ //location
            return posts.filter(post => 
                post.location.toLowerCase().indexOf(
                    searchText.toLowerCase()) !== -1);
       }
       
    }
}