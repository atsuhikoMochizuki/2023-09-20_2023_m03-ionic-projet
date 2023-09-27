import { Component, OnInit } from '@angular/core';
import { DatasServiceService } from 'src/app/shared/datas-service.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent  implements OnInit {

  constructor(private _datasService:DatasServiceService) { }

  ngOnInit() {
    let sessions = this._datasService.getAllSessions();
    sessions.subscribe(listeSession =>{
      listeSession.forEach(
        session => console.log(session)
      )
    })
  }

}
