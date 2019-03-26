import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  appStatus = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('stable');
      }, 2000)
  });

  servers = [
    {
      instanceType: 'large',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 3, 2019)
    },{
      instanceType: 'medium',
      name: 'Testing Environment',
      status: 'stable',
      started: new Date(15, 3, 2019)
    },{
      instanceType: 'small',
      name: 'User Database',
      status: 'offline',
      started: new Date(15, 3, 2019)
    },{
      instanceType: 'extra small',
      name: 'Development Server',
      status: 'stable',
      started: new Date(15, 3, 2019)
    }
  ];

  filteredStatus = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(16, 3, 2019)
    });
  }
}
