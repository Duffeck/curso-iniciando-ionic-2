import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { AreaAdministrativa } from '../objects/areaAdministrativa';

import { Usuario } from '../objects/usuario';
import { UserProvider } from '../../providers/user/user';
import { UsuarioAreaNewPage } from '../usuarioarea-new/usuarioarea-new';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
/**
 * Generated class for the UsuarioListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-usuario-list',
  templateUrl: 'usuario-list.html',
})
export class UsuarioListPage {
  area : AreaAdministrativa;
  usuarios : Array<Usuario>
  usuario : Usuario
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService : UserProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioListPage');
  }

  newUser(){
    var area = this.area;
    this.navCtrl.push(UsuarioAreaNewPage, {area : this.area});
  }

  ionViewWillEnter(){
    console.log("will enter")
    this.listarUsuarios();
  }

  ionViewWillLeave(){
    console.log("will leave");
    this.usuarios = new Array(0);
  }

  adicionarUsuario(usuario : Usuario){
    if(this.usuarios == null){
      this.usuarios = new Array(0);
    }
    this.usuarios.push(usuario);
    console.log(this.usuario);
  }

  listarUsuarios(){
    this.userService.listarUsuariosArea(this.area.id).subscribe(
      data =>{
        console.log('Data:'+ data.length);
        console.log(JSON.parse(data));
        let usersResponse = JSON.parse(data);
        if(usersResponse.length>0){
          for(var i=0; i < usersResponse.length; i++){
            var us = new Usuario();
            us.usuarioFromJSON(usersResponse[i]);
            /*if(rc.areaId==this.area.id){
                console.log("entrou");*/
                this.adicionarUsuario(us);
            //}

          }
          console.log('lengthok');
        }else{
          console.log('0');
        }
      },
      err => {
        console.log('erroooooooooooo');
        console.log(err);
      },
      () => console.log('Completou Requisição'));
    console.log('ionViewDidLoad rotasdescarteListPage');
  }
}
