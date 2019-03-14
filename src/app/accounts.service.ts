import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }
  accounts = [
      {
          name: 'Account1',
          status: 'active'
      },{
          name: 'Account2',
          status: 'inactive'
      },{
          name: 'Account3',
          status: 'unknown'
      }
  ];
  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
