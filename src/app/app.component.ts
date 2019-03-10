import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server-element', name: 'Servername', content: 'Some content for server-element'}];
  loadedFeature = 'recipes';

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

