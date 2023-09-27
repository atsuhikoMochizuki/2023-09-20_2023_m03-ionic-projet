import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from '../shared/services/datas.service';
import { Session } from '../shared/models/session';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
  providers: [DatasService]
})
export class SessionsComponent implements OnInit {

  listeSessions$?: Observable<Session[]>;
  listeSessions: Session[] = [];

  constructor(private route: Router,
    private datasService: DatasService) { }

  ngOnInit() {
    this.datasService.getAllSessions()
      .forEach(value=>console.log("sessions: "+value));

  }

  returnHome() {
    this.route.navigate(['/folder/home/']);

  }

}
