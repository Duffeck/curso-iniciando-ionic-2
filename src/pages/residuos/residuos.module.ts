import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResiduosPage } from './residuos';

@NgModule({
  declarations: [
    ResiduosPage,
  ],
  imports: [
    IonicPageModule.forChild(ResiduosPage),
  ],
  exports: [
    ResiduosPage
  ]
})
export class ResiduosPageModule {}
