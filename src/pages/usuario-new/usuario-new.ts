import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../objects/usuario';
import { UserProvider } from '../../providers/user/user'

/**
 * Generated class for the UsuarioNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-usuario-new',
  templateUrl: 'usuario-new.html',
})
export class UsuarioNewPage {
  usuarioForm: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
    this.usuarioForm = new Usuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioNewPage');
  }

  salvarUsuario(user: Usuario){
      this.userProvider.cadastrarUsuario(user).subscribe(
          data => {
              console.log(data);
          },
          err => {
              console.log(err);
          },
          () => console.log('Completou Requisição')
      );
  }

}
