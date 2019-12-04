import { PipeTransform, Pipe } from '@angular/core';
import { Post } from '../help-forum/post';

@Pipe({
    name: 'postFilter'
})

export class PostFilterPipe implements PipeTransform {
    transform(posts: any, searchText: string, filterFlag: number): any {
        if(!posts || !searchText){
            return posts;
        }
        return posts.filter(post => 
            post.title.toLowerCase().indexOf(
                searchText.toLowerCase()) !== -1);
    }
}