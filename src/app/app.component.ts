import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { Post } from './post/post.model';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    require('./app.component.scss')
  ],
  providers: [
    UserService,
    PostService
  ]
})
export class AppComponent implements OnInit {
  title = 'Angular2 Simple Blog';
  users: User[] = [];
  posts: Post[] = [];

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService
      .getPosts()
      .then(posts => this.posts = posts);
  }
}
