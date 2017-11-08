import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { ZonaVerde } from '../objects/zonaverde';
import { ZonaverdeProvider } from '../../providers/zonaverde/zonaverde';

import { Localizacao } from '../objects/localizacao';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';

/**
 * Generated class for the ZonaverdeDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-zonaverde-detail',
  templateUrl: 'zonaverde-detail.html',
})
export class ZonaVerdeDetailPage {
zona : ZonaVerde;
localizacao: Localizacao;
  constructor(public navCtrl: NavController, public navParams: NavParams, private zonaVerdeService : ZonaverdeProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    console.log(navParams.data);
    this.zona = navParams.get('zona');
    this.localizacao = new Localizacao();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZonaverdeDetailPage');
  }

  ionViewWillEnter(){
    console.log("will enter");
    this.zonaVerdeService.buscarLocalizacao(this.zona.id).subscribe(
      data =>{
        console.log('Data:'+ data.length);
        console.log(JSON.parse(data));
        let zonasResponse = JSON.parse(data);
        this.localizacao.localizacaoFromJSON(zonasResponse);
      },
      err => {
        console.log('erroooooooooooo');
        console.log(err);
      },
      () => console.log('Completou Requisição'));
  }

}
