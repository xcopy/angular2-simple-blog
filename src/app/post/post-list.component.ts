import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Post } from './post.model';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  subscription: Subscription;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.subscription = Observable.forkJoin([
      this.postService.getPosts(),
      this.userService.getUsers()
    ]).subscribe(results => {
      this.posts = results[0];

      this.posts.pop();

      this.posts.forEach((post: Post) => {
        const sub = this.userService
          .getUser(post.userId)
          .subscribe(user => post.author = user);

        setTimeout(() => {
          sub.unsubscribe();
        }, 1000);
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
