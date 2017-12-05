import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { Alerta } from '../objects/alerta';
import { AlertaProvider } from '../../providers/alerta/alerta';

import { DomSanitizer } from '@angular/platform-browser';
import { PontoDescarte } from '../objects/pontodescarte';
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
    this.alertaForm.ponto = new PontoDescarte();
  }

  ionViewDidLoad() {
  }

  cancelarAlerta(){
    this.navCtrl.pop();
  }

  salvarAlerta(alertaForm){
     this.alertaService.cadastrarAlerta(alertaForm).subscribe(
          data => {
          },
          err => {
          }
      );
    this.navCtrl.pop();
  }

}
