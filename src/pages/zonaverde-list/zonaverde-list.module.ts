import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZonaVerdeListPage } from './zonaverde-list';

@NgModule({
  declarations: [
    ZonaVerdeListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZonaVerdeListPage),
  ],
  exports: [
    ZonaVerdeListPage
  ]
})
export class ZonaverdeListPageModule {}
