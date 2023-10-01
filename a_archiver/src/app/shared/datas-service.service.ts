import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Session } from './models/session';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasServiceService {
  private apiURI:string = "https://devfest-nantes-2018-api.cleverapps.io/";

  constructor( private _http: HttpClient,) { }

  public getAllSessions(): Observable<Session[]> {
    return this._http.get<Session[]>(`${this.apiURI}/sessions`);
  }

}
