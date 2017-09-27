import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { ZonaVerde } from '../objects/zonaverde';
import { ZonaverdeProvider } from '../../providers/zonaverde/zonaverde';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private ZonaverdeService : ZonaverdeProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.zonaForm = new ZonaVerde();
  }

  cancelarZonaVerde(){
    this.navCtrl.pop();
  }

  salvarZonaVerde(){

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ZonaVerdePage');
  }

}
