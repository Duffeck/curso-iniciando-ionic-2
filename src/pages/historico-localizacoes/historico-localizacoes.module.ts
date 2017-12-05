import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoLocalizacoesPage } from './historico-localizacoes';

@NgModule({
  declarations: [
    HistoricoLocalizacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoLocalizacoesPage),
  ],
  exports: [
    HistoricoLocalizacoesPage
  ]
})
export class HistoricoLocalizacoesPageModule {}
