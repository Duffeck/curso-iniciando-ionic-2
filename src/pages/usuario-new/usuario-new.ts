import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../objects/usuario';
import { UserProvider } from '../../providers/user/user'
import { ToastController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, public toastCtrl: ToastController) {
    this.usuarioForm = new Usuario();
  }

  ionViewDidLoad() {
  }

  salvarUsuario(user: Usuario){
      this.userProvider.cadastrarUsuario(user).subscribe(
          data => {
              if(data){
                this.apresentarToast('Cadastro efetuado com sucesso');
                this.navCtrl.pop();
              }
          },
          err => {
          }
      );
  }

  apresentarToast(mensagem: string){
    this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'top'
    }).present();
  }

}
