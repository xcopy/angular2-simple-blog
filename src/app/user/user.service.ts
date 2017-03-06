import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from './user.model';

@Injectable()
export class UserService {
  users: any;

  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    if (this.users) {
      return Observable.of(this.users);
    } else {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(response => this.users = response.json());
    }
  }

  getUser(id: number): Observable<User> {
    return this.getUsers()
      .map(users => users.filter(user => user.id === id)[0]);
  }
}
