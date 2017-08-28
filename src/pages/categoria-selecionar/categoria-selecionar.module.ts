import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaSelecionarPage } from './categoria-selecionar';

@NgModule({
  declarations: [
    CategoriaSelecionarPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaSelecionarPage),
  ],
  exports: [
    CategoriaSelecionarPage
  ]
})
export class CategoriaSelecionarPageModule {}
