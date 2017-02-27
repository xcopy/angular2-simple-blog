import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  subscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.subscription = this.postService
      .getPosts()
      .subscribe(posts => this.posts = posts);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
