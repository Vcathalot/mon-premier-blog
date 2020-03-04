import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postName: string = 'Title name';
  content: string = 'writte your post';


onLike() {
    console.log('Like');
}

onNoLike() {
  console.log('No like');
}

  constructor() { }

  ngOnInit(): void {
  }

}
