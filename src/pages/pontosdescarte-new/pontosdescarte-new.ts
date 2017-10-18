import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { PontoDescarte } from '../objects/pontodescarte';
import { PontosDescarteProvider } from '../../providers/pontosdescarte/pontosdescarte';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
/**
 * Generated class for the PontosdescarteNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pontosdescarte-new',
  templateUrl: 'pontosdescarte-new.html',
})
export class PontosDescartePage {
  pontoForm : PontoDescarte;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pontoDescarteService : PontosDescarteProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.pontoForm = new PontoDescarte();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PontosdescarteNewPage');
  }

  cancelarPonto(){
    this.navCtrl.pop();
  }

  salvarPonto(pontoForm){
    console.log(pontoForm.ehParticular);
    this.pontoDescarteService.cadastrarPontoDescarte(pontoForm).subscribe(
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

}
