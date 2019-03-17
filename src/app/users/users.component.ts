import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Viktor'
    }, {
      id: 2,
      name: 'Ann'
    }, {
      id: 3,
      name: 'Ben'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
