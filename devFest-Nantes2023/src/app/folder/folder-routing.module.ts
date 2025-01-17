import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'home',
    component: HomeComponent
  }
  

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
