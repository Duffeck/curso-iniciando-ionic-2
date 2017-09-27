import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformativoPopPage } from './informativo-pop';

@NgModule({
  declarations: [
    InformativoPopPage,
  ],
  imports: [
    IonicPageModule.forChild(InformativoPopPage),
  ],
  exports: [
    InformativoPopPage
  ]
})
export class InformativoPopPageModule {}
