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
  

  constructor(private _datasService: DatasService) {}

  ngOnInit(): void {
    // console.log(this._datasService.listeIntervenants.get(101));
   
    
    
    if (this.sessionToShow.speakers) {
      // console.log("********DebutSession n°"+this.sessionToShow.id+"*******")
      // console.log("les intervenats de la sesison ont le numéro : "+this.sessionToShow.speakers)
  
      this.sessionToShow.speakers.forEach((speaker) => {
        
      //  console.log( this._datasService.listeIntervenants.get(speaker));
      
      // console.log("********FinSession********");
        
        
        
          
          
      });
     
    }
  }
}

//  this.sessionToShow.speakers?.forEach(id => {
//     console.log(id);
//     this._datasService.getIntervenant(id)
//       .subscribe(intervenant => {
//         console.log(intervenant);
//       })
