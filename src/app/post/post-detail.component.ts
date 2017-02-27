import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
  post: Post;
  subscription: Subscription;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];

    this.subscription = this.postService
      .getPost(id)
      .subscribe(post => this.post = post)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
