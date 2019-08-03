import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { RotaColeta } from "../objects/rotaColeta";
import { RotaColetaProvider } from "../../providers/rotacoleta-service/rotacoleta-service";

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';


/**
 * Generated class for the RotacoletaDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rotacoleta-detail',
  templateUrl: 'rotacoleta-detail.html',
})
export class RotaColetaDetailPage {
rota : RotaColeta;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rotaColetaService : RotaColetaProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    console.log(navParams.data);
    this.rota = navParams.get('rota');
    //this.localizacao = new Localizacao();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RotacoletaDetailPage');
  }

}
