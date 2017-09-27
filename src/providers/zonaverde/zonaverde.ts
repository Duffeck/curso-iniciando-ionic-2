import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ZonaVerde } from '../../pages/objects/zonaverde';
import { Config } from '../config';

/*
  Generated class for the ZonaverdeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ZonaverdeProvider {
  urlPart = "ZonaVerde/";
  constructor(public http: Http) {
    console.log('Hello ZonaverdeProvider Provider');
  }

  cadastrarZonaVerde(zonaverde: ZonaVerde){
      var url = Config.url+this.urlPart+'cadastrarZonaVerde?';
      url = url + 'nome=' + zonaverde.nome;
      url = url + '&descricao=' + zonaverde.descricao;
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      console.log(JSON.stringify(response));
      return response;
  }

}
