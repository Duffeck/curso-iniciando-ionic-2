import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioNewPage } from '../usuario-new/usuario-new';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { Usuario } from '../objects/usuario';
import { ToastController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider : UserProvider, public toastCtrl: ToastController) {
    this.userForm = new Usuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUsuario(user: Usuario){
    this.userProvider.loginUsuario(user).subscribe(
      data => {
        console.log('a');
        if(data){
          var resultado = JSON.parse(data);
          if(resultado != '' ){
            var usuario = new Usuario();
            console.log(JSON.parse(data));
            usuario.usuarioFromJSON(JSON.parse(data));
            localStorage.setItem('user', JSON.stringify(usuario));
            this.apresentarToast('Login efetuado com sucesso');
            this.navCtrl.setRoot(HomePage);
          }else{
            localStorage.setItem('user', JSON.stringify(null));
            this.apresentarToast('Email e Senha não correspondem. Tente novamente');
          }
        }else{
          console.log('c');
          localStorage.setItem('user', JSON.stringify(null));
          this.apresentarToast('Erro ao fazer login');
        }
      },
      err => {
        console.log('d');
        console.log(err);
      },
      () => console.log('Completou Requisição')
    );
  }

  registrarUsuario(user:Usuario, sucesso: boolean){
    if(sucesso){
      this.navCtrl.pop();
    }else{
      console.log('Deu pau');
    }
  }

  cadastrarUsuario(){
    this.navCtrl.push(UsuarioNewPage);
  }

  apresentarToast(mensagem: string){
    this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    }).present();
  }
}
