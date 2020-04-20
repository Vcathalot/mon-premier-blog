import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/post-service';
import { Router } from '@angular/router';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {

  postForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, 
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: 0,
      dontLoveIts: 0,
      createdAt:""
    });
  }

  onSavePost() {
    const title = this.postForm.get('Title').value;
    const content = this.postForm.get('content').value;
    const loveIts = this.postForm.get('loveIts').value;
    const dontLoveIts = this.postForm.get('dontLoveIts').value;
    const createdAt = Date.now();
    const newPost = new Post(title, content, loveIts, dontLoveIts, createdAt);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
