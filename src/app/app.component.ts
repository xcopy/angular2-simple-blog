import { Component } from '@angular/core';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    PostService
  ]
})
export class AppComponent {
  title = 'Angular2 Simple Blog';
}
