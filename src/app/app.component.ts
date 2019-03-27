import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCuoxICyS76TfXhU8Mr_wa0SYYL9sYQbv8",
      authDomain: "recipe-b90c5.firebaseapp.com"
    });
  }
}

