import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformativoListPage } from './informativo-list';

@NgModule({
  declarations: [
    InformativoListPage,
  ],
  imports: [
    IonicPageModule.forChild(InformativoListPage),
  ],
  exports: [
    InformativoListPage
  ]
})
export class InformativoListPageModule {}
