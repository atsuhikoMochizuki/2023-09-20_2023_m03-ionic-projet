import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    let activatedroute: string = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(activatedroute);
    switch (activatedroute) {
      case "sessions":
        this.folder = "Programme des sessions";
        break;
      case "home":
        this.folder = "Accueil";
        break;
      case "speakers":
        this.folder = "Liste des présentateurs";
        break;
      default: "DevFest Nates";
    }
  }
}
