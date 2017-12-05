import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaPontosPage } from './mapa-pontos';

@NgModule({
  declarations: [
    MapaPontosPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaPontosPage),
  ],
  exports: [
    MapaPontosPage
  ]
})
export class MapaPontosPageModule {}
