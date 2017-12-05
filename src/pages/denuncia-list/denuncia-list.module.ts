import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DenunciaListPage } from './denuncia-list';

@NgModule({
  declarations: [
    DenunciaListPage,
  ],
  imports: [
    IonicPageModule.forChild(DenunciaListPage),
  ],
  exports: [
    DenunciaListPage
  ]
})
export class DenunciaListPageModule {}
