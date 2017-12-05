import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaAdministrativaListPage } from './areaadministrativa-list';

@NgModule({
  declarations: [
    AreaAdministrativaListPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaAdministrativaListPage),
  ],
  exports: [
    AreaAdministrativaListPage
  ]
})
export class AreaadministrativaListPageModule {}
