import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';
import { Categoria } from '../../pages/objects/categoria';
/*
  Generated class for the CategoriaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoriaServiceProvider {
  urlPart = "Categoria/";
  constructor(public http: Http) {
  }

  listarComponentesCategoria(componente: string){
    var url = "";
    switch(componente){
      case "origem":
        url = Config.url + this.urlPart + "/ListarOrigens/";
        break;
      case "composicao":
        url = Config.url + this.urlPart + "/ListarComposicaoQuimica/";
        break;
      case "periculosidade":
        url = Config.url + this.urlPart + "/ListarPericulosidades/";
      break;
      case "tipo":
        url = Config.url + this.urlPart + "/ListarTipos/";
      break;
      default:
      break;
    }
    if(url != ""){
      var response = this.http.get(url).map(res => res.json());
      return response;
    }else{
      return null;
    }
  }

  cadastrarCategoria(categoria: Categoria){
    var url = Config.url+this.urlPart + "/SalvarCategoria/";
    var options = Config.postOptionsHeader();
    var response = this.http.post(url, categoria, options).map(res => res.json());
    return response;
  }

  listarCategorias(){
    var url = Config.url+this.urlPart+"/ListarTodasCategorias/";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
