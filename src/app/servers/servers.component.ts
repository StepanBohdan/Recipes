import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // allowNewServer = false;
  // serverCreationStatus = 'Server was not created';
  // serverName = 'test';
  // serverCreated = false;
  // servers = ['testServer', 'testServer2'];

    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    newServerName = '';
    newServerContent = '';

  constructor() {
     // setTimeout(() => {
     //   this.allowNewServer = true;
     // },
     //     2000);
  }

  ngOnInit(): void {
  }

  //   onServerCreate() {
  //     this.serverCreated = true;
  //     this.servers.push(this.serverName);
  //     this.serverCreationStatus = 'Server is created ' + this.serverName;
  // }

  // onUpdateServerName(event: Event ) {
  //     this.serverName = (<HTMLInputElement>event.target).value;
  // }

    // onAddServer() {
    //     this.servers.push('Another Server');
    // }

    // onRemoveServer(id: number) {
    //     const position = id + 1;
    //     this.servers.splice(position, 1);
    // }

    onAddServer() {
      this.serverCreated.emit({
          serverName: this.newServerName,
          serverContent: this.newServerContent
      });
    }
}


