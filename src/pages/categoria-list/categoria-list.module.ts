import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaListPage } from './categoria-list';

@NgModule({
  declarations: [
    CategoriaListPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaListPage),
  ],
  exports: [
    CategoriaListPage
  ]
})
export class CategoriaListPageModule {}
