import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { AreaAdministrativa } from '../objects/areaAdministrativa';
import { AreaAdministrativaProvider } from '../../providers/areaadministrativa-service/areaadministrativa-service';

import { RotaColetaListPage } from '../rotacoleta-list/rotacoleta-list';
import { EventListPage } from '../event-list/event-list';
import { PontosDescarteListPage } from '../pontosdescarte-list/pontosdescarte-list';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
/**
 * Generated class for the AreaadministrativaDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-areaadministrativa-detail',
  templateUrl: 'areaadministrativa-detail.html',
})
export class AreaAdministrativaDetailPage {
  area : AreaAdministrativa
  constructor(public navCtrl: NavController, public navParams: NavParams, private areaService: AreaAdministrativaProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
      console.log(navParams.data);
      this.area = navParams.get('area');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaAdministrativaDetailPage');
  }

  listRotas(area){
      this.navCtrl.push(RotaColetaListPage, {area : area});
  }
  listPontos(area){
      this.navCtrl.push(PontosDescarteListPage, {area : area});
  }
  listEventos(area){
      this.navCtrl.push(EventListPage, {area : area});
  }

}
