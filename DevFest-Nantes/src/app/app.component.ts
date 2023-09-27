import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/folder/inbox', icon: 'mail' },
    { title: 'Conférences', url: '/folder/conferences', icon: 'paper-plane' },
    { title: 'Intervenants', url: '/folder/intervenant', icon: 'heart' }
  ];
 
  constructor() {}
}
