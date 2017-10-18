import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';

import { AlertaProvider } from '../../providers/alerta/alerta';
import { Alerta } from '../objects/alerta';
import { AlertaDetailPage } from '../alerta-detail/alerta-detail';
/**
 * Generated class for the AlertaListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alerta-list',
  templateUrl: 'alerta-list.html',
})
export class AlertaListPage {
  alertas : Array<Alerta>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertaService: AlertaProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.alertaService.listarAlertas().subscribe(
      data =>{
        console.log('Data:'+ data.length);
        console.log(JSON.parse(data));
        let alertasResponse = JSON.parse(data);
        if(alertasResponse.length>0){
          for(var i=0; i < alertasResponse.length; i++){
            var al = new Alerta();
            al.alertaFromJSON(alertasResponse[i]);
            this.adicionarAlertas(al);
          }
          console.log('lengthok');
        }else{
          console.log('0');
        }
      },
      err => {
        console.log('erroooooooooooo');
        console.log(err);
      },
      () => console.log('Completou Requisição'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertaListPage');
  }

  adicionarAlertas(alerta : Alerta){
    if(this.alertas == null){
      this.alertas = new Array(0);
    }
    this.alertas.push(alerta);
    console.log(this.alertas);
  }

  alertasDescarteDetail(alerta : Alerta){
      this.navCtrl.push(AlertaDetailPage);
  }

}
