import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioListPage } from './usuario-list';

@NgModule({
  declarations: [
    UsuarioListPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioListPage),
  ],
  exports: [
    UsuarioListPage
  ]
})
export class UsuarioListPageModule {}
