import { Component, OnInit } from '@angular/core';
import { AccountsService } from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [{type: 'server-element', name: 'Servername', content: 'Some content for server-element'}];
  loadedFeature = 'recipes';
  onlyOdd = false;
  evenNumbers = [1, 3, 5];
  oddNumbers = [2, 4];
  testSwitch = 5;
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server-element',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onNavigate(features: string) {
    this.loadedFeature = features;
  }
}

