import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PontoDescarte } from '../../pages/objects/pontodescarte';
import { Config } from '../config';

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
      var url = Config.url+this.urlPart+'cadastrarPontosDescarte?';
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

  detalharPontoDescarte(){
    var url = Config.url+this.urlPart+'PontoDescarteDetail';
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;
  }

}