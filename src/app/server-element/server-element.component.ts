import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: 'server-element.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerElementComponent implements OnInit {
    @Input('srvElement') element: {type: string, name: string, content: string};
    serverId = 10;
    serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
   getColor() {
    return this.serverStatus ===  'online' ? 'green' : 'red';
   }
   ngOnInit(): void {
   }

}
