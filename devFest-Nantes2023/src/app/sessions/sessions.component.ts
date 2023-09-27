import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() { }
  returnHome() {
    console.log("il veut afficher la liste des sessions")
    this.route.navigate(['/folder/home/']);
    //this.folderService.currentPageSubject.next(this.folderService.LISTE_INTERVENANTS);
  }

}
