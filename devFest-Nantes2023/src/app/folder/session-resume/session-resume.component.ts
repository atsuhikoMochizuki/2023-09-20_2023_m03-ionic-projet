import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/shared/models/session';


@Component({
  selector: 'app-session-resume',
  templateUrl: './session-resume.component.html',
  styleUrls: ['./session-resume.component.scss'],
})
export class SessionResumeComponent implements OnInit {
  @Input() sessionToShow!: Session;

  title!: string;
  showDetailsInProgress!: boolean;


  constructor() { }

  ngOnInit(): void {
    console.log("quelle est la session reçue:", this.sessionToShow);

    this.title = "Mon covoiturage";
    this.showDetailsInProgress = false;
  }
}
