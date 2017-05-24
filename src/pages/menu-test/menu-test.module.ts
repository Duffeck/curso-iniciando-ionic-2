import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTestPage } from './menu-test';

@NgModule({
  declarations: [
    MenuTestPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuTestPage),
  ],
  exports: [
    MenuTestPage
  ]
})
export class MenuTestPageModule {}
