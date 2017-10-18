import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertaListPage } from './alerta-list';

@NgModule({
  declarations: [
    AlertaListPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertaListPage),
  ],
  exports: [
    AlertaListPage
  ]
})
export class AlertaListPageModule {}
