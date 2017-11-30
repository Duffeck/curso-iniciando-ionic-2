import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformativoNewPage } from '../informativo-new/informativo-new'
/**
 * Generated class for the InformativoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-informativo-list',
  templateUrl: 'informativo-list.html',
})
export class InformativoListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  newInformativo(){
    this.navCtrl.push(InformativoNewPage);
  }
}
