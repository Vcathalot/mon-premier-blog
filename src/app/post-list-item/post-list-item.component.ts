import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  isAuth = true;
  onLike() {
    console.log('Like');
  }
  
  onNoLike() {
    console.log('NoLike');
}

  constructor() { }

  ngOnInit(): void {
  }

}
