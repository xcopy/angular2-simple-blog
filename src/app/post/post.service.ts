import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post.model';

@Injectable()
export class PostService {
  constructor(private http: Http) {}

  getPosts(): Promise<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .toPromise()
      .then(response => response.json());
  }
}
