import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map } from 'rxjs';
import { Session } from '../models/session';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intervenant } from '../models/intervenant';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  private apiURI: string = 'https://devfest-nantes-2018-api.cleverapps.io/';
  //  listeIntervenants:Map<number,Intervenant>;
  // listeSessions:Map<number,Session>;

  constructor(private http: HttpClient) {
    //  this.listeIntervenants = this.recupListeInstervenants();
    // this.listeSessions = this.recupListeSessions();
  }

  public getAllSessions(): Observable<Session[]> {
    return this.http
      .get<any>(`${this.apiURI}sessions`)
      .pipe(map((value) => Object.values(value)));
  }

  public getAllIntervenants(): Observable<Intervenant[]> {
    return this.http
      .get<any>(`${this.apiURI}speakers`)
      .pipe(map((value) => Object.values(value)));
  }

  /* public getIntervenant(id: number): Observable<Intervenant | undefined> {
    console.log("récupération d'un intervebabt");
    let listeIntervenants = this.http.get<{ [key: number]: Intervenant }>(`${this.apiURI}speakers`)
      .pipe(map(value => Object.values(value)),
        map(v => v.find(p => p.id == id)))
    return listeIntervenants;
  } */

  // public getIntervenant(id: number): Observable<Intervenant> {
  //   let intervenant: Observable<Intervenant>;
  //   let returnValue: Intervenant;
  //   console.log("récupération d'un intervebabt");
  //   let listeIntervenants = this.http.get<{ [key: number]: Intervenant }>(`${this.apiURI}speakers`)
  //     .pipe(map(value => Object.values(value)),
  //       map(v => v.find(p => p.id == id)))
  //   if(listeIntervenants)
  //     intervenant = listeIntervenants;
  // }

  /* public getIntervenant2(id: number): Observable<Intervenant|undefined> {
    console.log("récupération d'un intervebabt");
    let listeIntervenants = this.http.get<{ [key: number]: Intervenant }>(`${this.apiURI}speakers`)
      .pipe(map(value => Object.values(value)),
        map(v => v.filter(p => p.id == id)))

        return listeIntervenants;
  } */

  public getIntervenant2(id: number): Observable<Intervenant[]> {
    console.log('récupération des intervenants');
    return this.http.get<Intervenant[]>(`${this.apiURI}speakers`);
  }

  public getTousIntervenants(): Observable<Intervenant[]> {
    console.log('récupération des intervenants');
    return this.http.get<Intervenant[]>(`${this.apiURI}speakers`);
  }

  public recupListeInstervenants(): Map<number, Intervenant> {
    let speakers = new Map();
    this.http
      .get<Intervenant[]>(`${this.apiURI}speakers`)
      .subscribe((datas) => {
        for (var i in datas) {
          speakers.set(datas[i].id?.toString, datas[i]);
        }
        speakers.forEach((data) => console.log(data));
        return speakers;
      });
    
      return speakers;
  }

  public recupListeSessions(): Observable<any> {
   return this.http.get<any>(`${this.apiURI}sessions`);
    
   
  }

  public recupOneIntervenant(id: number): Intervenant {
    let intervenant!: Intervenant;

    return intervenant;
  }


 
}
