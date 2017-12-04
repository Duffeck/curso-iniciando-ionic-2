import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../objects/usuario';
import { UserProvider } from '../../providers/user/user';
import { HistoricoLocalizacoesPage } from '../historico-localizacoes/historico-localizacoes';

/**
* Generated class for the ProfilePage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user:Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider) {
    this.user = this.userService.retornarUsuario();
    if(!this.user){
      this.user = new Usuario();
    }
  }

  ionViewWillEnter(){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  exibirLocalizacoes(){
    this.navCtrl.push(HistoricoLocalizacoesPage);
  }
}
