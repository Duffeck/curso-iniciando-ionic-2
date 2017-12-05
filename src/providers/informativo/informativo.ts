import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';
import { Informativo } from '../../pages/objects/informativo';
/*
  Generated class for the InformativoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InformativoProvider {
  urlPart = "Informativo/";
  constructor(public http: Http) {
  }

  informativoAleatorio(){
      var url = Config.url+this.urlPart+'InformativoAleatorio/';
      var response = this.http.get(url).map(res => res.json());
      return response;
  }

  cadastrarInformativo(informativo: Informativo){
      var url = Config.url+this.urlPart+'CadastrarInformativo?';
      url = url + 'titulo=' + informativo.titulo;
      url = url + '&descricao=' + informativo.descricao;
      var response = this.http.get(url).map(res => res.json());
      return response;
  }

listarInformativos(){
      var url = Config.url+this.urlPart+'ListarInformativos';
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      console.log(JSON.stringify(response));
      return response;
  }

}
