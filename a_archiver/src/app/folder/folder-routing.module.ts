import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { HomeComponent } from './home/home.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { IntervenantsComponent } from './intervenants/intervenants.component';
import { ListeComponent } from './conferences/liste/liste.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'conferences',
  //   component: ConferencesComponent,
  //   children: [
  //     { path: 'liste', component: ListeComponent }
  //   ]
  // },
  // {
  //   path: 'intervenants',
  //   component: IntervenantsComponent
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule { }
