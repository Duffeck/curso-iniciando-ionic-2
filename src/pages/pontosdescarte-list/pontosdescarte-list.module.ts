import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PontosDescarteListPage } from './pontosdescarte-list';

@NgModule({
  declarations: [
    PontosDescarteListPage,
  ],
  imports: [
    IonicPageModule.forChild(PontosDescarteListPage),
  ],
  exports: [
    PontosDescarteListPage
  ]
})
export class PontosdescarteListPageModule {}
