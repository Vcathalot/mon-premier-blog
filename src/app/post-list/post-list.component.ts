import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postName: string = 'Title name';
  content: string = 'writte your post';
  lastUpdate = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
