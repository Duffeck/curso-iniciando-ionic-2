import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { Alerta } from '../objects/alerta';
import { AlertaProvider } from '../../providers/alerta/alerta';

import { PontoDescarte } from '../objects/pontodescarte';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
/**
 * Generated class for the AlertaDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alerta-detail',
  templateUrl: 'alerta-detail.html',
})
export class AlertaDetailPage {
  alerta : Alerta;
  ponto : PontoDescarte;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertaService : AlertaProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.alerta = navParams.get('alerta');
    this.ponto = new PontoDescarte();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertaDetailPage');
  }

/*  ionViewWillEnter(){
    console.log("will enter");
    this.alertaService.buscarPontoDescarte(this.alerta.id).subscribe(
      data =>{
        console.log('Data:'+ data.length);
        console.log(JSON.parse(data));
        let alertaResponse = JSON.parse(data);
        this.ponto.pontoFromJSON(alertaResponse);
      },
      err => {
        console.log('erroooooooooooo');
        console.log(err);
      },
      () => console.log('Completou Requisição'));
  }*/

}
