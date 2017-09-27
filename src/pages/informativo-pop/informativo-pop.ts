import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformativoProvider } from '../../providers/informativo/informativo';
import { Informativo } from '../objects/informativo';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the InformativoPopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-informativo-pop',
  templateUrl: 'informativo-pop.html',
})
export class InformativoPopPage {
  informativo : Informativo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public informativoProvider : InformativoProvider) {
  }

  ionViewDidLoad() {
    this.informativoProvider.informativoAleatorio().subscribe(
          data => {
            if(data){
            this.informativo = new Informativo();
            this.informativo.informativoFromJSON(data);
            }
          },
          err => {
            console.log('Erro');
            console.log(err);
          },
          () => console.log('Completou Requisição')
      );
    this.navCtrl.pop();
    console.log('ionViewDidLoad InformativoPopPage');
  }

}
