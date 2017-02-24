import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getUser(id: number) {
    return this.getUsers()
      .then(users => users.filter(user => user.id === id)[0]);
  }

  private handleError(error:any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
