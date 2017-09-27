import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZonaVerdePage } from './zonaverde';

@NgModule({
  declarations: [
    ZonaVerdePage,
  ],
  imports: [
    IonicPageModule.forChild(ZonaVerdePage),
  ],
  exports: [
    ZonaVerdePage
  ]
})
export class ZonaverdePageModule {}
