import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  

  constructor(private route: Router)
          /*private folderService:FolderServiceService)*/ {
            
           }

  ngOnInit() {}

  afficherListeSessions(){
   console.log("il veut afficher la liste des sessions")
  this.route.navigate(['/folder/sessions/']); 
   //this.folderService.currentPageSubject.next(this.folderService.LISTE_INTERVENANTS);
  }
  afficherListeParticipants(){
    console.log("il veut afficher la liste des participants")
   this.route.navigate(['/folder/intervenants/']); 
    //this.folderService.currentPageSubject.next(this.folderService.LISTE_INTERVENANTS);
   }

  

}
