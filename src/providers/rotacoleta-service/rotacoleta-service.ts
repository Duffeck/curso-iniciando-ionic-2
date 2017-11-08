import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RotaColeta } from '../../pages/objects/rotacoleta';
import { Config } from '../config';

/*
  Generated class for the RotacoletaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RotaColetaProvider {
  urlPart = "RotaColeta/";
  constructor(public http: Http) {
    console.log('Hello RotacoletaServiceProvider Provider');
  }

  cadastrarRotaColeta(rotaColeta: RotaColeta){
      var url = Config.url+this.urlPart+'CadastrarRotaColeta?';
      url = url + 'nome=' + rotaColeta.nome;
      url = url + '&status=' + rotaColeta.status;
      url = url + '&AreaId=' + rotaColeta.areaId;
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      console.log(JSON.stringify(response));
      return response;
  }

  listarRotas(){
    var url = Config.url+this.urlPart+'ListarRotas';
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;

  }

}
