import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { ServiceResponse } from './models/serviceResponse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook';

  posts: Post[];
  serviceResponse: ServiceResponse;
  oServiceResponse: Observable<ServiceResponse>;
  serviceURL: string = "https://my-json-server.typicode.com/PaoloCarugati/facebook/db";

  constructor(public http: HttpClient) {
      this.makeTypedRequest()
  }

  makeTypedRequest() : void
  {
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.serviceResponse = d;});
    this.posts = this.serviceResponse.data;
  } 

  addPost(autore: HTMLInputElement, testo: HTMLInputElement): boolean {
    console.log(`Adding article title: ${autore.value} and link: ${testo.value}`);
    this.posts.push(new Post(autore.value, testo.value));
    //pulisco i campi della form
    autore.value = '';
    testo.value = '';
    return false;
  }
}
