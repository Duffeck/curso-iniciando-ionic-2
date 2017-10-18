import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResiduosNewPage } from './residuos-new';

@NgModule({
  declarations: [
    ResiduosNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ResiduosNewPage),
  ],
  exports: [
    ResiduosNewPage
  ]
})
export class ResiduosNewPageModule {}
