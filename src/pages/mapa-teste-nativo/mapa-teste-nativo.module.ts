import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaTesteNativoPage } from './mapa-teste-nativo';

@NgModule({
  declarations: [
    MapaTesteNativoPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaTesteNativoPage),
  ],
  exports: [
    MapaTesteNativoPage
  ]
})
export class MapaTesteNativoPageModule {}
