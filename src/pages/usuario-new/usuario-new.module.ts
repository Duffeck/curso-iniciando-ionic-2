import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioNewPage } from './usuario-new';

@NgModule({
  declarations: [
    UsuarioNewPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioNewPage),
  ],
  exports: [
    UsuarioNewPage
  ]
})
export class UsuarioNewPageModule {}
