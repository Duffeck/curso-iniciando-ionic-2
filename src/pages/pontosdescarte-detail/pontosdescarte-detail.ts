import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertaNewPage } from '../alerta-new/alerta-new';

import { PontoDescarte } from '../objects/pontodescarte';

/**
 * Generated class for the PontosdescarteDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pontosdescarte-detail',
  templateUrl: 'pontosdescarte-detail.html',
})
export class PontosDescarteDetailPage {
  ponto : PontoDescarte;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ponto = navParams.get('ponto');
  }

  ionViewDidLoad() {
  }

  newAlerta(ponto : PontoDescarte){
    this.navCtrl.push(AlertaNewPage, {ponto: ponto});
  }
}
