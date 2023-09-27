import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/folder/home', icon: 'home' },
    { title: 'Sessions', url: '/folder/sessions', icon: 'home' },
    { title: 'Présentateurs', url: '/folder/speakers', icon: 'home' }
    
  ];
  
  constructor() {}
}
