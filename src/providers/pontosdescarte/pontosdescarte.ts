import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PontoDescarte } from '../../pages/objects/pontodescarte';
import { Config } from '../config';
import { Categoria } from '../../pages/objects/categoria';
import { Localizacao } from '../../pages/objects/localizacao';

/*sss
Generated class for the ZonaverdeProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PontosDescarteProvider {
  urlPart = "PontoDescarte/";
  constructor(public http: Http) {
  }

  cadastrarPontoDescarte(pontoDescarte: PontoDescarte){
    let url = Config.url+this.urlPart+'CadastrarPontoDescarte?';
    var options = Config.postOptionsHeader();
    var response = this.http.post(url, pontoDescarte, options).map(res => res.json());
    return response;
  }

  listarPontosDescarte(){
    var url = Config.url+this.urlPart+'ListarPontosDescarte';
    var response = this.http.get(url).map(res => res.json());
    return response;

  }

  detalharPontoDescarte(){
    var url = Config.url+this.urlPart+'PontoDescarteDetail';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  listarPontosPorCategoria(categoria: Categoria, localizacao: Localizacao){
    var distancia = parseInt(localStorage.getItem('distancia'));

    var url = Config.url+this.urlPart+'listarPontosPorCategoria?id_categoria='+categoria.id;
    if(localizacao.latitude && localizacao.longitude){
      url += "&distancia=" + distancia
      + "&latitude="+localizacao.latitude
      + "&longitude="+localizacao.longitude;
    }
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
