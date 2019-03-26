import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map }                     from "rxjs/operators";

@Injectable()
export class FirebaseServerService {
  private firebaseUrl = 'https://udemy-setup-back.firebaseio.com/data.json';
  constructor(private httpClient: HttpClient) {}

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(`${this.firebaseUrl}`, servers, {headers: headers});
  }
  getServers() {
    return this.httpClient.get(this.firebaseUrl)
    //   .pipe(
    //   map(server.name = 'FETCHED_' + server.name)
    // )
      ;
  }
}
