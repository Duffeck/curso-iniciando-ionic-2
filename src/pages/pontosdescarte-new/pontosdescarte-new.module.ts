import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PontosDescartePage } from './pontosdescarte-new';

@NgModule({
  declarations: [
    PontosDescartePage,
  ],
  imports: [
    IonicPageModule.forChild(PontosDescartePage),
  ],
  exports: [
    PontosDescartePage
  ]
})
export class PontosdescarteNewPageModule {}
