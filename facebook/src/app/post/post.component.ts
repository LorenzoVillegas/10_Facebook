import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() post: Post;

  constructor() {
    //this.article = new Article('Angular 2','http://angular.io',10);
  }

  voteUp(): Boolean {
    this.post.add_like(); //Modificato qui 
    return false;
  }

  ngOnInit() {}

}
