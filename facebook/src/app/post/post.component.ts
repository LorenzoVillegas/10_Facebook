import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() post: Post;

  constructor() {
  }

  voteUp(): Boolean {
    this.post.add_like(); //Modificato qui 
    return false;
  }

  ngOnInit() {}

}
