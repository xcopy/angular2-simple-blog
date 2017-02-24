import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService
  ]
})
export class AppComponent implements OnInit {
  title = 'Angular2 Simple Blog';
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }
}
