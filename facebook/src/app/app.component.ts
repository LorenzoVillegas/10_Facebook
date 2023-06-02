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

  data: ServiceResponse;
  oServiceResponse: Observable<ServiceResponse>;
  serviceURL: string = "https://my-json-server.typicode.com/PaoloCarugati/facebook/db";

  constructor(public http: HttpClient) {
      this.makeTypedRequest()
  }

  makeTypedRequest() : void
  {
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.data = d;});
  } 

}
