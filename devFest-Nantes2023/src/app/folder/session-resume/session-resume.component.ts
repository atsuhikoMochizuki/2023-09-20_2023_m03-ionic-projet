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
  listeintervenants: Array<Intervenant> = [];

  constructor(private _datasService: DatasService) {}

  ngOnInit(): void {
   
  }
}


