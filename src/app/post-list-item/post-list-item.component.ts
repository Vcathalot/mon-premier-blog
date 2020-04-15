import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.models';

import { PostsService } from '../services/post-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postLoveIts: number;
  @Input() postDontLoveIts: number;

  @Input() post: Post;

  isAuth = true;
  
    constructor(public postsService: PostsService, public router: Router) { }

ngOnInit() {}

  onLoveIt() {
    this.postLoveIts++;
    this.post.loveIts = this.postLoveIts;
    this.postsService.savePosts();
  }

  onDontLoveIt() {
    this.postDontLoveIts--;
    this.post.dontLoveIts = this.postDontLoveIts;
    this.postsService.savePosts();
   
  }

  onNewPost(){
    this.router.navigate(["/posts", "new"]);
  }
  
  onDeletePost(posts: Post){
    this.postsService.removePost(posts);
  }

}

