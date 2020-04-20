import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PostsService } from '../services/post-service';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }
  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
