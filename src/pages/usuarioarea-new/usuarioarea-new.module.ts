import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioAreaNewPage } from './usuarioarea-new';

@NgModule({
  declarations: [
    UsuarioAreaNewPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioAreaNewPage),
  ],
  exports: [
    UsuarioAreaNewPage
  ]
})
export class UsuarioareaNewPageModule {}
