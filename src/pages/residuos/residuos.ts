import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CategoriaSelecionarPage } from '../categoria-selecionar/categoria-selecionar';
import { Categoria } from '../objects/categoria';
import { ResiduosNewPage } from '../residuos-new/residuos-new';
import { UserProvider } from '../../providers/user/user';
import { Usuario } from '../objects/usuario';
/**
 * Generated class for the ResiduosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-residuos',
  templateUrl: 'residuos.html',
})
export class ResiduosPage {
  listCategorias = new Categoria().tiposCategorias;
  shownGroup = null;
  usuario : Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private userService: UserProvider) {
  }

  ionViewDidLoad() {
    this.usuario = this.userService.retornarUsuario();
    console.log('ionViewDidLoad ResiduosPage');
  }

  presentPopover(categoria: string) {
     let popover = this.modalCtrl.create(CategoriaSelecionarPage, {categoria});
     popover.present();
   }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  novoResiduo(){
    this.navCtrl.push(ResiduosNewPage);
  }
}
