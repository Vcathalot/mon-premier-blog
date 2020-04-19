import { Component, OnInit, Input, OnDestroy}  from '@angular/core';
import { Post } from '../models/post.models';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/post-service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts: Post [];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService,) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    
    this.postsService.emitPosts();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
