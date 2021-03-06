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
    var response = this.http.post(url, user, options).map(res => res.json());
    return response;
  }

  loginUsuario(user: Usuario){
    var url = Config.url+this.urlPart+'EfetuarLogin?';
    var options = Config.postOptionsHeader();
    var response = this.http.post(url, user, options).map(res => res.json());
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
    console.log(user);
    if(user){
      //user.localizacoes.push(localizacao);
      localizacao.usuario = user;
      var url = Config.url+this.urlPart+'InserirLocalizacao?';
      var options = Config.postOptionsHeader();
      var response = this.http.post(url, localizacao, options).map(res => res.json());
      return response;
    }
  }

  listarLocalizacoes(usuario: Usuario){
    if(usuario.id > 0){
      var url = Config.url+this.urlPart+'ListarLocalizacoes?id_usuario='+usuario.id;
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      return response;
    }
  }

  sair(){
    var user = this.retornarUsuario();
    if(user){
      localStorage.removeItem('user');
      this.alterarUsuarioSistema();
    }
  }
}
