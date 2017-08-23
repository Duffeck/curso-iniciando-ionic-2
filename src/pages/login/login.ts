import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioNewPage } from '../usuario-new/usuario-new';
import { UserProvider } from '../../providers/user/user';
import { Usuario } from '../objects/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userForm: Usuario;
  retorno: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider : UserProvider) {
      this.userForm = new Usuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUsuario(user: Usuario){
      this.userProvider.loginUsuario(user).subscribe(
          data => {
              console.log(data);
              this.retorno = data;
          },
          err => {
              console.log(err);
          },
          () => console.log('Completou Requisição')
      );
      for(var i=0; i<1000;i++)
      {
        if(this.retorno){
          this.navCtrl.pop();
        }else{
          console.log('Deu pau');
        }
      }
  }

  cadastrarUsuario(){
    this.navCtrl.push(UsuarioNewPage);
  }
}
