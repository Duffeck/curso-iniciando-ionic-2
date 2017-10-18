import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertaDetailPage } from './alerta-detail';

@NgModule({
  declarations: [
    AlertaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertaDetailPage),
  ],
  exports: [
    AlertaDetailPage
  ]
})
export class AlertaDetailPageModule {}
