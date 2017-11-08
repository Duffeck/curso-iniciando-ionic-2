import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotaColetaDetailPage } from './rotacoleta-detail';

@NgModule({
  declarations: [
    RotaColetaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RotaColetaDetailPage),
  ],
  exports: [
    RotaColetaDetailPage
  ]
})
export class RotacoletaDetailPageModule {}
