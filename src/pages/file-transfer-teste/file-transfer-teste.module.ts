import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileTransferTestePage } from './file-transfer-teste';

@NgModule({
  declarations: [
    FileTransferTestePage,
  ],
  imports: [
    IonicPageModule.forChild(FileTransferTestePage),
  ],
  exports: [
    FileTransferTestePage
  ]
})
export class FileTransferTestePageModule {}
