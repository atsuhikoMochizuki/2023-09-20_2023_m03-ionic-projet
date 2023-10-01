import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor(private route: Router)
          /*private folderService:FolderServiceService)*/ {

  }

  ngOnInit() { }

  afficherListeSessions() {
   
    this.route.navigate(['/folder/sessions/']);
  }
  afficherListeParticipants() {
    this.route.navigate(['/folder/intervenants/']);
  }
}
