import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FirebaseServerService {

  constructor(private http: HttpClient) {}

  storeServers(servers: any[]) {
    return this.http.post('https://udemy-setup-back.firebaseio.com/data.json', servers);
  }
}
