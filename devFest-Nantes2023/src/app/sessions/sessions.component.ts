import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from '../shared/services/datas.service';
import { Session } from '../shared/models/session';
import { Observable } from 'rxjs';
import { Intervenant } from '../shared/models/intervenant';
import { SessionwithSpeakers } from '../shared/models/sessionWithSpeakers';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
  providers: [DatasService],
})
export class SessionsComponent implements OnInit {
  listeSessions: Session[] = [];
  listeIntervenants: Intervenant[] = [];

  constructor(private route: Router, private _datasService: DatasService) {}

  ngOnInit() {
    this._datasService.getPresentateurs().subscribe((presentateur) => {
      for (let i in presentateur) {
        this.listeIntervenants.push(presentateur[i]);
      }
    });

    this._datasService.getSessions().subscribe((session) => {
      for (let sessionIdx in session) {
        this.listeSessions.push(session[sessionIdx]);
      }
    });
  }

  public afficherDetails():void{
  }
}
