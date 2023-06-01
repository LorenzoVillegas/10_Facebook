import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook';

  posts: Post[];

  constructor(){
    this.posts = [
      new Post("mario rossi", "questo è il primo post di mario rossi"),
      new Post("antonio bianchi", "questo è il post di antonio bianchi"),
      new Post("mario rossi", "questo è il secondo post di Mario Rossi")
    ]
  }

  addPost(autore: HTMLInputElement, testo: HTMLInputElement): boolean {
    console.log(`Adding post autore: ${autore.value} and testo: ${testo.value}`);
    this.posts.push(new Post(autore.value, testo.value));
    //pulisco i campi della form
    autore.value = '';
    testo.value = '';
    return false;
  }

  sortedPosts(): Post[] {
    return this.posts.sort((a: Post, b: Post) => b.like - a.like);
  }

}
