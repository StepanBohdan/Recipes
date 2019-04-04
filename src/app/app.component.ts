import { Component, OnInit } from '@angular/core';
import { HttpClient }        from "@angular/common/http";
import * as firebase         from 'firebase';

import { Post } from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCuoxICyS76TfXhU8Mr_wa0SYYL9sYQbv8",
      authDomain: "recipe-b90c5.firebaseapp.com"
    });

    // this.httpClient
    //   .get<Post>('https://jsonplaceholder.typicode.com/posts')
    //     .subscribe(fetchPost => (this.posts = fetchedPosts));
  }
}

