import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { ZonaVerde } from '../objects/zonaverde';
import { ZonaverdeProvider } from '../../providers/zonaverde/zonaverde';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';

import {Localizacao } from '../objects/localizacao';

/**
 * Generated class for the ZonaverdePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-zonaverde',
  templateUrl: 'zonaverde.html',
})
export class ZonaVerdePage {
  zonaForm : ZonaVerde;
  constructor(public navCtrl: NavController, public navParams: NavParams, private zonaVerdeService : ZonaverdeProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.zonaForm = new ZonaVerde();
    this.zonaForm.localizacao = new Localizacao();
  }

  cancelarZonaVerde(){
    this.navCtrl.pop();
  }

  salvarZonaVerde(zonaForm){
    this.zonaVerdeService.cadastrarZonaVerde(zonaForm).subscribe(
          data => {
            console.log('Resposta');
            console.log(data);
          },
          err => {
            console.log('Erro');
            console.log(err);
          },
          () => console.log('Completou Requisição')
      );
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ZonaVerdePage');
  }

}
