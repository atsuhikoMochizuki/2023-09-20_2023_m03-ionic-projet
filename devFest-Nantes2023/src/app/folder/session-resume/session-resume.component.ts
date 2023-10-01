import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Intervenant } from 'src/app/shared/models/intervenant';
import { Session } from 'src/app/shared/models/session';
import { DatasService } from 'src/app/shared/services/datas.service';

@Component({
  selector: 'app-session-resume',
  templateUrl: './session-resume.component.html',
  styleUrls: ['./session-resume.component.scss'],
})
export class SessionResumeComponent implements OnInit {
  @Input() sessionToShow!: Session;
  @Input() ss!:Array<Intervenant>;

  title!: string;
  showDetailsInProgress!: boolean;
  listeNomsIntervenants: Array<Intervenant|undefined> = [];
  intervenantsMap!: Map<number, Intervenant>;

  constructor(private _datasService: DatasService) {}

  ngOnInit(): void {
    this._datasService.getTousIntervenants().subscribe((datas) => {
      let listeIntervenants = Object.values(datas);
      
      for (var i in listeIntervenants) {
        this.intervenantsMap.set(
          listeIntervenants[i].id,
          listeIntervenants[i]
        );
      }
    });

    this.sessionToShow.speakers.forEach(speakerId=>{

      
      
     
      
    })
   
  }
}


