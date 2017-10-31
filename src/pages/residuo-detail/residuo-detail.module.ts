import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResiduoDetailPage } from './residuo-detail';

@NgModule({
  declarations: [
    ResiduoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ResiduoDetailPage),
  ],
  exports: [
    ResiduoDetailPage
  ]
})
export class ResiduoDetailPageModule {}
