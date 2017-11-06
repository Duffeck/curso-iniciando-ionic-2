import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DenunciaNewPage } from './denuncia-new';

@NgModule({
  declarations: [
    DenunciaNewPage,
  ],
  imports: [
    IonicPageModule.forChild(DenunciaNewPage),
  ],
  exports: [
    DenunciaNewPage
  ]
})
export class DenunciaNewPageModule {}
