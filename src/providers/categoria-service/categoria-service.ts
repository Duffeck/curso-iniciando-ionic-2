import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config'
/*
  Generated class for the CategoriaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoriaServiceProvider {
  urlPart = "Categoria/";
  constructor(public http: Http) {
    console.log('Hello CategoriaServiceProvider Provider');
  }

  listarCategoriaPorTipo(tipoCategorias: string){
    /*
      var url = Config.url+this.urlPart+'CadastrarUsuario?';
      url = url + 'tipo_categoria=' + tipoCategorias;
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      console.log(response);
      return response;
      */
  }
}
