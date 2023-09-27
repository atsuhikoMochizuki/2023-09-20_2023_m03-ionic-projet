import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FolderServiceService } from 'src/app/shared/services/folder-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  

  constructor(private route: Router,
          private folderService:FolderServiceService) { }

  ngOnInit() {}

  afficherListeSessions(){
   console.log("il veut afficher la liste des sessions")
  //  this.route.navigate(['/folder/conference/']); 
   this.folderService.currentPageSubject.next(this.folderService.LISTE_INTERVENANTS);
  }

}
