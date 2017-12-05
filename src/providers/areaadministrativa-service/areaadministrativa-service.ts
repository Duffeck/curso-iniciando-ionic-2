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
  }

  cadastrarArea(area: AreaAdministrativa){
      var url = Config.url+this.urlPart+'CadastrarArea?';
      url = url + 'nome=' + area.nome;
      url = url + '&descricao=' + area.descricao;

      var response = this.http.get(url).map(res => res.json());
      return response;
  }

  listarAreas(){
    var url = Config.url+this.urlPart+'ListarAreas';
    var response = this.http.get(url).map(res => res.json());
    return response;

  }


}
