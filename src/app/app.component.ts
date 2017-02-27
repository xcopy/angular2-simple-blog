import { Component } from '@angular/core';
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    PostService,
    UserService
  ]
})
export class AppComponent {
  title = 'Angular2 Simple Blog';
}
