import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ZonaVerde } from '../../pages/objects/zonaverde';
//import { Localizacao } from '../../pages/objects/localizacao';
import { Config } from '../config';

/*sss
  Generated class for the ZonaverdeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ZonaverdeProvider {
  urlPart = "ZonaVerde/";
  constructor(public http: Http) {
  }

  cadastrarZonaVerde(zonaverde: ZonaVerde){
      var url = Config.url+this.urlPart+'CadastrarZonaVerde?';
      url = url + 'nome=' + zonaverde.nome;
      url = url + '&descricao=' + zonaverde.descricao;
      url = url + '&latitude=' + zonaverde.localizacao.latitude;
      url = url + '&longitude=' + zonaverde.localizacao.longitude;
      var response = this.http.get(url).map(res => res.json());
      return response;
  }

  listarZonasVerdes(){
    var url = Config.url+this.urlPart+'ListarZonasVerdes';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  buscarLocalizacao(id : number){
    var url = Config.url+this.urlPart+'BuscarLocalizacao?';
    url = url + 'id=' + id;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;

  }

}
