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

  title!: string;
  showDetailsInProgress!: boolean;
  nomIntervenants: Observable<Intervenant|undefined>[]=[];


  constructor(private _datasService: DatasService) { }

  ngOnInit(): void {
    if (this.sessionToShow.speakers) {
      this.sessionToShow.speakers.forEach(speaker => {
        // console.log("les intervenants sont : " + speaker);
        this.nomIntervenants.push(this._datasService.getIntervenant(speaker));
     })
    }
  }
}

//  this.sessionToShow.speakers?.forEach(id => {
//     console.log(id);
//     this._datasService.getIntervenant(id)
//       .subscribe(intervenant => {
//         console.log(intervenant);
//       })




