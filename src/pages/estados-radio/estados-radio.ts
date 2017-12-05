import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EstadosRadioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-estados-radio',
  templateUrl: 'estados-radio.html',
})
export class EstadosRadioPage {
  estadoSelecionado : string;
  estados : Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.estados = ["Acre (AC)" ,
"Alagoas (AL)" ,
"Amapá (AP)" ,
"Amazonas (AM)" ,
"Bahia (BA)" ,
"Ceará (CE)" ,
"Distrito Federal (DF)" ,
"Espírito Santo (ES)" ,
"Goiás (GO)" ,
"Maranhão (MA)" ,
"Mato Grosso (MT)" ,
"Mato Grosso do Sul (MS)" ,
"Minas Gerais (MG)" ,
"Pará (PA)" ,
"Paraíba (PB)" ,
"Paraná (PR)" ,
"Pernambuco (PE)" ,
"Piauí (PI)" ,
"Rio de Janeiro (RJ)" ,
"Rio Grande do Norte (RN)" ,
"Rio Grande do Sul (RS)" ,
"Rondônia (RO)" ,
"Roraima (RR)" ,
"Santa Catarina (SC)" ,
"São Paulo (SP)" ,
"Sergipe (SE)" ,
"Tocantins (TO)"];
  }

  ionViewDidLoad() {
  }

  selecionarEstado(uf: string){
    this.viewCtrl.dismiss(uf);
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
