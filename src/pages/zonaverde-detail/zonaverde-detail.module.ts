import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZonaVerdeDetailPage } from './zonaverde-detail';

@NgModule({
  declarations: [
    ZonaVerdeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ZonaVerdeDetailPage),
  ],
  exports: [
    ZonaVerdeDetailPage
  ]
})
export class ZonaverdeDetailPageModule {}
