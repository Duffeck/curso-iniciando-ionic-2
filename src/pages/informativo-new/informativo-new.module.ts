import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformativoNewPage } from './informativo-new';

@NgModule({
  declarations: [
    InformativoNewPage,
  ],
  imports: [
    IonicPageModule.forChild(InformativoNewPage),
  ],
  exports: [
    InformativoNewPage
  ]
})
export class InformativoNewPageModule {}
