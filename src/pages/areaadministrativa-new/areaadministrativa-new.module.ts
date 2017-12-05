import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaAdministrativaNewPage } from './areaadministrativa-new';

@NgModule({
  declarations: [
    AreaAdministrativaNewPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaAdministrativaNewPage),
  ],
  exports: [
    AreaAdministrativaNewPage
  ]
})
export class AreaadministrativaNewPageModule {}
