import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from '../shared/services/datas.service';
import { Session } from '../shared/models/session';
import { Observable } from 'rxjs';
import { Intervenant } from '../shared/models/intervenant';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
  providers: [DatasService],
})
export class SessionsComponent implements OnInit {
  mapOfSessions!: Map<number, Session>;
  listeSessions!: Array<Session>;
  guigui$!: Observable<Session[]>;

  constructor(private route: Router, private _datasService: DatasService) {
    // this.mapOfSessions = this._datasService.listeSessions;
  }

  ngOnInit() {
    this._datasService.recupListeSessions().subscribe((value) => {
      this.listeSessions = Object.values(value);
    });
    console.log(this._datasService.listeIntervenantsMap);
   
  }

  returnHome() {
    this.route.navigate(['/folder/home/']);
  }

  /*  public recupListeSessions(): Observable<Map<number, Session>> {
    let sessions = new Map();
    return this.http.get<Session[]>(`${this.apiURI}sessions`)
    .subscribe((datas) => {
      for (var i in datas) {
        sessions.set(datas[i].id, datas[i]);
      }
      return sessions;
    }); */
}
