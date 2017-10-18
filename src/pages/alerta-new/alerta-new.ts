import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { Alerta } from '../objects/alerta';
import { AlertaProvider } from '../../providers/alerta/alerta';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
/**
 * Generated class for the AlertaNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alerta-new',
  templateUrl: 'alerta-new.html',
})
export class AlertaNewPage {
  alertaForm: Alerta
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertaService: AlertaProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.alertaForm = new Alerta();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertaNewPage');
  }

  cancelarAlerta(){
    this.navCtrl.pop();
  }

  salvarAlerta(){
    console.log("IHUU");
    /*this.alertaService.cadastrarPontoDescarte(pontoForm).subscribe(
          data => {
            console.log('Resposta');
            console.log(data);
          },
          err => {
            console.log('Erro');
            console.log(err);
          },
          () => console.log('Completou Requisição')
      );*/
    this.navCtrl.pop();
  }

}
