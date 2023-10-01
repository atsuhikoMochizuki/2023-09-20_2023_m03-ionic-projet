import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from '../shared/services/datas.service';
import { Intervenant } from '../shared/models/intervenant';

@Component({
  selector: 'app-intervenants',
  templateUrl: './intervenants.component.html',
  styleUrls: ['./intervenants.component.scss'],
})
export class IntervenantsComponent implements OnInit {
  listeIntervenants: Intervenant[] = [];

  constructor(private route: Router, private _datasService: DatasService) {}

  ngOnInit() {
    this._datasService.getPresentateurs().subscribe((presentateur) => {
      for (let i in presentateur) {
        this.listeIntervenants.push(presentateur[i]);
      }
    });
  }

  returnHome() {
    this.route.navigate(['/folder/home/']);
  }

  public afficherDetails(): void {}
}
