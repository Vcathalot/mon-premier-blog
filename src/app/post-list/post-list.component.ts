import { Component, OnInit}  from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts= [
    {
      title: 'Mon premier post',
      content: 'Hello 1',
      loveIts:0,
      dontLoveIts:0,
      createdAt:new Date ()
    },
    {
      title: 'Mon coucou post',
      content: 'Hello hello 2',
      loveIts:0,
      dontLoveIts:0,
      createdAt: new Date ()
    },
    {
      title: 'Mon troisième post',
      content: 'Hello 3',
      loveIts:0,
      dontLoveIts:0,
      createdAt: new Date ()
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
