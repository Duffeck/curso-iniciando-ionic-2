import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventNewPage } from './event-new';

@NgModule({
  declarations: [
    EventNewPage,
  ],
  imports: [
    IonicPageModule.forChild(EventNewPage),
  ],
  exports: [
    EventNewPage
  ]
})
export class EventNewPageModule {}
