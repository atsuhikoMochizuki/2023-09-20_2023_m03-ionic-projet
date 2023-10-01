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

  listeIntervenantsMap: Map<number, Intervenant> = new Map<
    number,
    Intervenant
  >();
  listeIntervenants: Intervenant[] = [];
  // listeSessions:Map<number,Session>;

  constructor(private http: HttpClient) {
    // this.listeIntervenantsMap = this.recupListeInstervenants();

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

  public recupAllIntervenants(): Observable<Intervenant[]> {
    return this.http.get<Intervenant[]>(`${this.apiURI}speakers`);
  }

  public getTousIntervenants(): Observable<Intervenant[]> {
    // console.log('récupération des intervenants');
    return this.http.get<Intervenant[]>(`${this.apiURI}speakers`);
  }

  // public recupListeInstervenants(): Observable<Map<number, Intervenant>> {
  //   let toto = new Map<number, Intervenant>();
  //   this.http
  //     .get<Intervenant[]>(`${this.apiURI}speakers`)
  //     .subscribe((datas) => {
  //       // console.log("liste des speakers:");
  //       this.listeIntervenants = Object.values(datas);

  //       for (var i in this.listeIntervenants) {
  //         this.listeIntervenantsMap.set(
  //           this.listeIntervenants[i].id,
  //           this.listeIntervenants[i]
  //         );
  //       }
  //     });
  //   return toto;
  // }

  public recupListeSessions(): Observable<any> {
    return this.http.get<any>(`${this.apiURI}sessions`);
  }

  public recupOneIntervenant(id: number): Intervenant {
    let intervenant!: Intervenant;

    return intervenant;
  }

 
}
