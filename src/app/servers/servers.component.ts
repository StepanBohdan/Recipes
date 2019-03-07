import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'Server was not created';
  serverName = 'test';
  serverCreated = false;
  servers = ['testServer', 'testServer2'];

  constructor() {
     setTimeout(() => {
       this.allowNewServer = true;
     },
         2000);
  }

  onServerCreate() {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server is created ' + this.serverName;
  }

  // onUpdateServerName(event: Event ) {
  //     this.serverName = (<HTMLInputElement>event.target).value;
  // }
}


