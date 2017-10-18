import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertaNewPage } from './alerta-new';

@NgModule({
  declarations: [
    AlertaNewPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertaNewPage),
  ],
  exports: [
    AlertaNewPage
  ]
})
export class AlertaNewPageModule {}
