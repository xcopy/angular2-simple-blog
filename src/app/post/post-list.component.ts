import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService
      .getPosts()
      .then(posts => this.posts = posts);
  }

  showPost(post: Post) {
    this.router.navigate(['posts', {id: post.id}]);
  }
}
