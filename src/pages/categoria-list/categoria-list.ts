import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaNewPage } from '../categoria-new/categoria-new';
import { UserProvider } from '../../providers/user/user';
import { Usuario } from '../objects/usuario';

/**
 * Generated class for the CategoriaListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categoria-list',
  templateUrl: 'categoria-list.html',
})
export class CategoriaListPage {
  usuario : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider) {
    this.usuario = this.userService.retornarUsuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaListPage');
  }

  novaCategoria(){
    this.navCtrl.push(CategoriaNewPage);
  }
}
