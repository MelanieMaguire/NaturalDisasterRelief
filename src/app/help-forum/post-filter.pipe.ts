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
        /*
         return posts.filter(post => 
            post.tags.indexOf(
                searchText.toLowerCase()) !== -1);
        */
        return posts.filter(post => 
            post.title.toLowerCase().indexOf(
                searchText.toLowerCase()) !== -1);
    }
}