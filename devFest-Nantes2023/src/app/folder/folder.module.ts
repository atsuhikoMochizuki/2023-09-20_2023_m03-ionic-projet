import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HomeComponent } from '../home/home.component';
import { SessionsComponent } from '../sessions/sessions.component';
import { IntervenantsComponent } from '../intervenants/intervenants.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage,HomeComponent,SessionsComponent,IntervenantsComponent]
})
export class FolderPageModule {}
