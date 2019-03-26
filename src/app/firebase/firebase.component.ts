import { Component }             from '@angular/core';
import { FirebaseServerService } from "./firebase-server.service";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent {
  servers = [
    {
      name: 'TestServer',
      capacity: 10,
      id: this.generateId()
    },{
      name: 'LiveServer',
      capacity: 100,
      id: this.generateId()
    },
  ];
  constructor(private firebaseServerService: FirebaseServerService){}

  onAddServer(name: string) {
    this.servers.push({
        name: name, capacity: 50, id: this.generateId()
      });
  }
  onSave() {
    this.firebaseServerService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onGet() {
    this.firebaseServerService.getServers()
      .subscribe(
        (servers: any[])=> console.log(servers),
        // (servers:any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
