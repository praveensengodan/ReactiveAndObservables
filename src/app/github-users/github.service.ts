// Angular
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private _url = `https://api.github.com/search/users?q=`;
  constructor(
    private _http: Http
  ) {}
  getUsers(searchValue: string) {
    console.log(searchValue);
    return this._http.get(`${this._url}${searchValue}`)
    .map((response: Response) => response.json());
  }
}
