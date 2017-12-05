import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Denuncia } from '../objects/denuncia';
import { DenunciaServiceProvider } from '../../providers/denuncia-service/denuncia-service';

/**
 * Generated class for the DenunciaListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-denuncia-list',
  templateUrl: 'denuncia-list.html',
})
export class DenunciaListPage {
  denuncias : Array<Denuncia>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public denunciaProvider: DenunciaServiceProvider) {
  }

  ionViewDidLoad() {
    this.listarDenuncias();
  }

  listarDenuncias(){
    this.denunciaProvider.listarDenuncias().subscribe(
      data => {

      },
      err => {

      }
    );
  }
}
