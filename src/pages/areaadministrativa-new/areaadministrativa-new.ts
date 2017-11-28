import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import { AreaAdministrativa } from '../objects/areaAdministrativa';
import { AreaAdministrativaServiceProvider } from '../../providers/areaadministrativa-service/areaadministrativa-service';

/**
 * Generated class for the AreaadministrativaNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-areaadministrativa-new',
  templateUrl: 'areaadministrativa-new.html',
})
export class AreaAdministrativaNewPage {
  areaForm : AreaAdministrativa;
  constructor(public navCtrl: NavController, public navParams: NavParams, private areaAdministrativaService : AreaAdministrativaServiceProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.areaForm = new AreaAdministrativa();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaadministrativaNewPage');
  }

  cancelarArea(){
    this.navCtrl.pop();
  }

  salvarArea(areaForm){
    this.areaAdministrativaService.cadastrarArea(areaForm).subscribe(
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
