import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotaColetaNewPage } from './rotacoleta-new';

@NgModule({
  declarations: [
    RotaColetaNewPage,
  ],
  imports: [
    IonicPageModule.forChild(RotaColetaNewPage),
  ],
  exports: [
    RotaColetaNewPage
  ]
})
export class RotaColetaNewPageModule {}
