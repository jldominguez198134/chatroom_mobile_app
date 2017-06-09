import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  getUsers(): Observable<Object> {
    return this.http.get('https://randomuser.me/api/?results=10')
      .map(this.extractData);
  }

  private extractData(res: Response): Object {
    let body = res.json();
    return body;
  }

}
