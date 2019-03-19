import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  onlyOdd = false;
  evenNumbers = [1, 3, 5];
  oddNumbers = [2, 4];
  testSwitch = 5;
  serverElements = [{type: 'server-element', name: 'Servername', content: 'Some content for server-element'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server-element',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
