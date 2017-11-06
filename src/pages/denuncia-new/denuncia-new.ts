import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Denuncia } from '../objects/denuncia';

/**
 * Generated class for the DenunciaNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-denuncia-new',
  templateUrl: 'denuncia-new.html',
})
export class DenunciaNewPage {
  denunciaForm: Denuncia;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.denunciaForm = new Denuncia();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciaNewPage');
  }

  cancelarDenuncia(){
    this.navCtrl.pop();
  }

  salvarDenuncia(denuncia: Denuncia){
    console.log(denuncia);
  }

}
