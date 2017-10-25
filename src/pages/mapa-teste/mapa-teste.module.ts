import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaTestePage } from './mapa-teste';

@NgModule({
  declarations: [
    MapaTestePage,
  ],
  imports: [
    IonicPageModule.forChild(MapaTestePage),
  ],
  exports: [
    MapaTestePage
  ]
})
export class MapaTestePageModule {}
