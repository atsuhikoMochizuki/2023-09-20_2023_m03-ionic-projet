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
  providers: [DatasService]
})
export class SessionsComponent implements OnInit {

  listeSessions$?: Observable<Session[]>;
  listeSessions: Session[] = []; 
 
 

  constructor(private route: Router,
    private datasService: DatasService) { }

  ngOnInit() {
    this.datasService.getAllSessions()
    .subscribe(liste=>{
      this.listeSessions=liste;
    
    });

  }

  returnHome() {
    this.route.navigate(['/folder/home/']);

  }

}
