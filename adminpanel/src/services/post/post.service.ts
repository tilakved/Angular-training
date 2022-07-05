import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  // private url = 'https://api.publicapis.org/entries'

  constructor(private httpClient:HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url)
  }
}
