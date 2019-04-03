import { Component, OnInit } from '@angular/core';
import { AccountsService }   from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}
