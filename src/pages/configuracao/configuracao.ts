import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the ConfiguracaoPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {
  distancia: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(localStorage.getItem('distancia')){
      this.distancia = parseInt(localStorage.getItem('distancia'));
    }else{
      this.distancia = 30;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
  }

  setarItem(){
    console.log(this.distancia);
    localStorage.setItem('distancia', JSON.stringify(this.distancia));
  }
}
