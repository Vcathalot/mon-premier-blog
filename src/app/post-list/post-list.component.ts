import { Component, OnInit}  from '@angular/core';
import { Post } from '../models/post.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post [];
  postsSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

}
