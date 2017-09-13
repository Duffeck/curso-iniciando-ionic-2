import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../../pages/objects/usuario';
import { Config } from '../config'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  urlPart = "User/";
  constructor(public http: Http) {
    //console.log('Hello UserProvider Provider');
  }

/*
  searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(res => res.json());
        return response;
  }
*/
  cadastrarUsuario(user: Usuario){
      var url = Config.url+this.urlPart+'CadastrarUsuario?';
      url = url + 'nome=' + user.nome;
      url = url + '&senha=' + user.senha;
      url = url + '&email=' + user.email;
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      console.log(response);
      return response;
  }

    loginUsuario(user: Usuario){
      var url = Config.url+this.urlPart+'EfetuarLogin?';
      url = url + '&senha=' + user.senha;
      url = url + '&email=' + user.email;
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      return response;
  }

  retornarUsuario() {
    var stringUser = localStorage.getItem('user');
    if(stringUser!="{}"){
      return JSON.parse(stringUser);
    }else{
      return false;
    }
  }
}
