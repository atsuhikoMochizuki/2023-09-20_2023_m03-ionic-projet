import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
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
  intervenants: Intervenant[] = [];


  constructor(private _datasService: DatasService) { }

  ngOnInit(): void {
    let id:number = 101;
    this._datasService.getAllIntervenants().subscribe(list=>{
      let result = list.filter(interv=>interv.id===id)
      if(result.length>0)
      console.log(this.intervenants);
    })
    
        // .subscribe(intervenant=> console.log("intervenant:"+intervenant));
      }
      
  }
   
  //  this.sessionToShow.speakers?.forEach(id => {
  //     console.log(id);
  //     this._datasService.getIntervenant(id)
  //       .subscribe(intervenant => {
  //         console.log(intervenant);
  //       })




