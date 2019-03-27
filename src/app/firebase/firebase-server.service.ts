import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class FirebaseServerService {
  private firebaseUrl = 'https://udemy-setup-back.firebaseio.com';
  constructor(private httpClient: HttpClient) {}

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(`${this.firebaseUrl}/` + 'data.json',
      servers, {headers: headers});
  }
  getServers() {
    return this.httpClient.get(`${this.firebaseUrl}/` + 'data.json')
  }

  getAppName() {
    return this.httpClient.get(`${this.firebaseUrl}/` + 'appname.json')
  }
}
