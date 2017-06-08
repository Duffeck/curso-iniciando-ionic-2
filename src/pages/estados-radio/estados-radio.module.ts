import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadosRadioPage } from './estados-radio';

@NgModule({
  declarations: [
    EstadosRadioPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadosRadioPage),
  ],
  exports: [
    EstadosRadioPage
  ]
})
export class EstadosRadioPageModule {}
