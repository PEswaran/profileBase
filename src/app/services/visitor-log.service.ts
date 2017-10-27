import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Visitor } from '../models/Visitor';

@Injectable()
export class VisitorLogService {

result:any;

constructor(private _http: Http) { }

getUsers() {
  return this._http.get("/api/users")
    .map(result => this.result = result.json().data);
}

insertNewUser(user:Visitor){
  return this._http.post("/api/users", user)
    .map(result => this.result = result.json().data);

}

}
