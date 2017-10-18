import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PontosDescarteDetailPage } from './pontosdescarte-detail';

@NgModule({
  declarations: [
    PontosDescarteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PontosDescarteDetailPage),
  ],
  exports: [
    PontosDescarteDetailPage
  ]
})
export class PontosdescarteDetailPageModule {}
