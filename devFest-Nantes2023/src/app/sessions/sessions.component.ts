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
  mapOfSessions!: Map<number, Session>;
  listeSessions!: Array<Session>;
  listeIntervenants!: Array<Intervenant>;

  intervenantsMap!: Map<number, Intervenant>;
  guigui$!: Observable<Session[]>;
  sessionToSend!: SessionwithSpeakers;
  sessionsToTransmit!: SessionwithSpeakers[];

  constructor(private route: Router, private _datasService: DatasService) {
    // this.mapOfSessions = this._datasService.listeSessions;
  }

  ngOnInit() {
    let toto: SessionwithSpeakers;

    //Récupération de la liste des intervenants
    this._datasService.getTousIntervenants().subscribe((listeObjet) => {
      let listeIntervenants = Object.values(listeObjet);
      /*   console.log("et voila");
        console.log(listeIntervenants); */

      //On récupère ensuite la liste des sessions
      this._datasService
        .recupListeSessions()
        .subscribe((listeSessionsObject) => {
          let listeSessions: Session[] = Object.values(listeSessionsObject);
          console.log('et voila');
          console.log(listeSessions);
          listeSessions.forEach((session) => {
            let toto:Array<Intervenant> = [];
            if (session.speakers) {
              session.speakers.forEach((speakerId) => {
                // console.log(`Recherche de l'intervenant n°${speakerId}`);
                let found = false;
                let i = 0;
                for (i = 0; i < listeIntervenants.length; i++) {
                  if (listeIntervenants[i].id == speakerId) {
                    // console.log(`trouvé, c'est ${listeIntervenants[i].name}`);
                    found = true;
                    break;
                  }
                }
                // On vérifie que l'intervenant a été troivé
                if (!found) throw new Error();
                toto.push(listeIntervenants[i]);
               
              });
            }
            console.log(`La liste des intervenants de la session n°${session.id}est la suivante:`)
            toto.forEach(intervenant=>console.log(intervenant.name));
          });
         
        });

      //Pour chaque session, on recherche dans le liste l'intervenant
      //correspondant à l'id
    });
  }
}
