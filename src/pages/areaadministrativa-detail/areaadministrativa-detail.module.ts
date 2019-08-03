import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AreaAdministrativaDetailPage  } from './areaadministrativa-detail';

@NgModule({
  declarations: [
    AreaAdministrativaDetailPage ,
  ],
  imports: [
    IonicPageModule.forChild(AreaAdministrativaDetailPage ),
  ],
  exports: [
    AreaAdministrativaDetailPage
  ]
})
export class AreaadministrativaDetailPageModule {}
