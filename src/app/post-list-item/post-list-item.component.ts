import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.models';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/post-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnDestroy {

  posts: Post [];
  postsSubscription: Subscription;

  isAuth = true;
  
    constructor(public postsService: PostsService, public router: Router) { }


  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

 

  onLoveIt(posts: Post) {
    this.postsService.LoveIt(posts)
  }

  onDontLoveIt(posts: Post) {
    this.postsService.DontLoveIt(posts)
   
  }

  onNewPost(){
    this.router.navigate(["/posts", "new"]);
  }
  
  onDeletePost(posts: Post){
    this.postsService.removePost(posts);
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
