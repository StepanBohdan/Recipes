import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { AuthSimpleService } from "../auth-simple.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authSimpleService: AuthSimpleService
  ) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    // calc
    this.router.navigate(
      ['/servers', id, 'edit'],
      {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }

  onLogin() {
    this.authSimpleService.login();
  }
  onLogout() {
    this.authSimpleService.logout();
  }


}
