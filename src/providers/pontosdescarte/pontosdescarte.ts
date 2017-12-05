import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PontoDescarte } from '../../pages/objects/pontodescarte';
import { Config } from '../config';

import { Localizacao } from '../objects/localizacao';

/*sss
  Generated class for the ZonaverdeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PontosDescarteProvider {
  urlPart = "PontoDescarte/";
  constructor(public http: Http) {
    console.log('Hello PontosDescarteProvider Provider');
  }

  cadastrarPontoDescarte(pontoDescarte: PontoDescarte){
      var url = Config.url+this.urlPart+'CadastrarPontoDescarte?';
      url = url + 'estado=' + pontoDescarte.estado;
      url = url + '&ehParticular=' + pontoDescarte.ehParticular;
      url = url + '&latitude=' + pontoDescarte.localizacao.latitude;
      url = url + '&longitude=' + pontoDescarte.localizacao.longitude;
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      console.log(JSON.stringify(response));
      return response;
  }

  listarPontosDescarte(){
    var url = Config.url+this.urlPart+'ListarPontosDescarte';
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;
  }

  listarPontosDescarteArea(id : number){
    var url = Config.url+this.urlPart+'ListarPontosDescarte?' + 'id=' +id;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;

  }

  detalharPontoDescarte(){
    var url = Config.url+this.urlPart+'PontoDescarteDetail';
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;
  }

}
