import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../../pages/objects/usuario';
import { Config } from '../config';
import { Events } from 'ionic-angular';
import { Localizacao } from '../../pages/objects/localizacao'
/*
Generated class for the UserProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  urlPart = "Usuarios/";
  constructor(public http: Http, public events: Events) {
  }

  cadastrarUsuario(user: Usuario){
    var url = Config.url+this.urlPart+'CadastrarUsuario?';
    var options = Config.postOptionsHeader();
    console.log(url);
    console.log(user);
    var response = this.http.post(url, user, options).map(res => res.json());
    console.log(response);
    return response;
  }

  loginUsuario(user: Usuario){
    var url = Config.url+this.urlPart+'EfetuarLogin?';
    var options = Config.postOptionsHeader();
    console.log(url);
    console.log(user);
    var response = this.http.post(url, user, options).map(res => res.json());
    console.log(response);
    return response;
  }

  alterarUsuarioSistema() {
    this.events.publish('checaUsuario');
  }

  retornarUsuario() {
    var stringUser = localStorage.getItem('user');
    if(stringUser!="{}"){
      return JSON.parse(stringUser);
    }else{
      return false;
    }
  }

  salvarLocalizacaoUsuario(localizacao: Localizacao){
    var user = this.retornarUsuario();
    if(user){
      localizacao.usuario = user;
      var url = Config.url+this.urlPart+'EfetuarLogin?';
      var options = Config.postOptionsHeader();
      console.log(url);
      console.log(user);
      var response = this.http.post(url, user, options).map(res => res.json());
      console.log(response);
      return response;
    }
  }
}
