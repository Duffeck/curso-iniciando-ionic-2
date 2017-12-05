import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Informativo} from '../objects/informativo';
import { InformativoProvider } from '../../providers/informativo/informativo';
/**
 * Generated class for the InformativoNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-informativo-new',
  templateUrl: 'informativo-new.html',
})
export class InformativoNewPage {
  informativoForm : Informativo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public informativoService: InformativoProvider) {
    this.informativoForm = new Informativo();
  }

  ionViewDidLoad() {
  }

  cancelarInformativo(){
    this.navCtrl.pop();
  }

  salvarInformativo(informativo: Informativo){

    this.informativoService.cadastrarInformativo(informativo).subscribe(
          data => {
          },
          err => {
          }
      );
    this.navCtrl.pop();
  }

}
