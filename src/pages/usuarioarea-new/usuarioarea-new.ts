import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { AreaAdministrativa } from '../objects/areaAdministrativa';

import { Usuario } from '../objects/usuario';
import { UserProvider } from '../../providers/user/user';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
/**
 * Generated class for the UsuarioareaNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-usuarioarea-new',
  templateUrl: 'usuarioarea-new.html',
})
export class UsuarioAreaNewPage {
  area : AreaAdministrativa;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService : UserProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioareaNewPage');
  }

}
