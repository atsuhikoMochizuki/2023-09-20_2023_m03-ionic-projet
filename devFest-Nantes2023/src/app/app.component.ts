import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acceuil', url: '/folder/home', icon: 'mail' },
    { title: 'Sessions', url: '/folder/sessions', icon: 'paper-plane' },
    { title: 'Intervenants', url: '/folder/intervenants', icon: 'heart' },
    
  ];
  
  constructor() {}
}
