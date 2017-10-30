import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';

import { AreaAdministrativa } from '../../pages/objects/areaAdministrativa';

/*
  Generated class for the AreaadministrativaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AreaAdministrativaServiceProvider {
  urlPart = "AreaAdministrativa/";
  constructor(public http: Http) {
    console.log('Hello AreaadministrativaServiceProvider Provider');
  }

  cadastrarArea(area: AreaAdministrativa){
      var url = Config.url+this.urlPart+'CadastrarArea?';
      url = url + 'nome=' + area.nome;
      url = url + '&descricao=' + area.descricao;

      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      console.log(JSON.stringify(response));
      return response;
  }

  listarAreas(){
    var url = Config.url+this.urlPart+'ListarAreas';
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;

  }


}
