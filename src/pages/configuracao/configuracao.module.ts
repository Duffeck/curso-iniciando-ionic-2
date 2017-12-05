import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracaoPage } from './configuracao';

@NgModule({
  declarations: [
    ConfiguracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracaoPage),
  ],
  exports: [
    ConfiguracaoPage
  ]
})
export class ConfiguracaoPageModule {}
