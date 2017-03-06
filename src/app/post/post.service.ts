import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Post } from './post.model';

@Injectable()
export class PostService {
  posts: any;

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    if (this.posts) {
      return Observable.of(this.posts);
    } else {
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(response => this.posts = response.json());
    }
  }

  getPost(id: number): Observable<Post> {
    return this.getPosts()
      .map(posts => posts.filter(post => post.id === id)[0]);
  }
}
