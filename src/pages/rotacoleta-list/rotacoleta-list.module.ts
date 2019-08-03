import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotaColetaListPage } from './rotacoleta-list';

@NgModule({
  declarations: [
    RotaColetaListPage,
  ],
  imports: [
    IonicPageModule.forChild(RotaColetaListPage),
  ],
  exports: [
    RotaColetaListPage
  ]
})
export class RotacoletaListPageModule {}
