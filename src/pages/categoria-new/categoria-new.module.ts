import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaNewPage } from './categoria-new';

@NgModule({
  declarations: [
    CategoriaNewPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaNewPage),
  ],
  exports: [
    CategoriaNewPage
  ]
})
export class CategoriaNewPageModule {}
