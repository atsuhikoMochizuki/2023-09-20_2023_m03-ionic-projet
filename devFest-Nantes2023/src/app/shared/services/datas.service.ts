import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Session } from '../models/session';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intervenant } from '../models/intervenant';


@Injectable({
  providedIn: 'root'
})
export class DatasService{
 
  private apiURI:string = "https://devfest-nantes-2018-api.cleverapps.io/";

   constructor( private http:HttpClient) { }

  public getAllSessions(): Observable<Session[]> {
    return this.http.get<any>(`${this.apiURI}sessions`).pipe(map(value=>Object.values(value)));
  }
  

  public getAllIntervenants(): Observable<Intervenant[]> {
    return this.http.get<Intervenant[]>(`${this.apiURI}/speakers`);
  }

  
}
