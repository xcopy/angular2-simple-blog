import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list.component';
import { PostDetailComponent } from './post/post-detail.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PostListComponent,
        PostDetailComponent
      ],
      imports: [
        MaterialModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
