import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Post } from './post.model';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit, OnDestroy {
  post: Post;
  subscription: Subscription;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];

    this.subscription = this.postService
      .getPost(id)
      .subscribe(post => {
        const sub = this.userService
          .getUser(post.userId)
          .subscribe(user => post.author = user);

        this.post = post;

        setTimeout(() => {
          sub.unsubscribe();
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
