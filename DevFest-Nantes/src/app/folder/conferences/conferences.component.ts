import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DatasServiceService } from 'src/app/shared/datas-service.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss'],
})
export class ConferencesComponent  implements OnInit {
  
  public  AFFICHAGE_CONFERENCE_ACCUEIL:string = "CONFERENCE_ACCUEIL"; 
  public  AFFICHAGE_CONFERENCE_LISTE:string = "CONFERENCE_LISTE"; 
  public  AFFICHAGE_CONFERENCE_PARTICIPANTS:string = "CONFERENCE_PARTICIPANTS"; 
  
  public statusPage!:string;

  constructor(private _datasService:DatasServiceService) { }

  ngOnInit() {
   
    // this.statusPage = this.AFFICHAGE_CONFERENCE_ACCUEIL;
    // let sessions = this._datasService.getAllSessions();
    // sessions.subscribe(listeSession =>{
    //   listeSession.forEach(
    //     session => console.log(session)
    //   )
    // })
  }
 
 

  

}


