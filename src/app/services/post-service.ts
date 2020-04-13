import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { Post } from '../models/post.models';


@Injectable ()
export class PostsService {

  posts: Post[]= [];
  postsSubject= new Subject<Post[]>();

  constructor() {
    this.getPosts()
   }

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
}
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }


  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
  
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post){
          return true;
        }
      }
    )
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  LoveIt(posts: Post) {
    posts.loveIts++;
  }

  DontLoveIt(posts: Post) {
    posts.dontLoveIts++;
   
  }

  

 

}