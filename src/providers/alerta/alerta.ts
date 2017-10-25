import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Alerta } from '../../pages/objects/alerta';
import { Config } from '../config';

/*
  Generated class for the AlertaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlertaProvider {
  urlPart = "Alerta/";
  constructor(public http: Http) {
    console.log('Hello AlertaProvider Provider');
  }

  listarAlertas(){
    var url = Config.url+this.urlPart+'ListarAlertas';
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;
  }

  cadastrarAlerta(alerta: Alerta){
      var url = Config.url+this.urlPart+'cadastrarAlerta?';
      /*url = url + 'estado=' + alerta.estado;
      url = url + '&descricao=' + alerta.descricao;
      url = url + '&latitude=' + zonaverde.localizacao.latitude;
      url = url + '&longitude=' + zonaverde.localizacao.longitude;*/
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      console.log(JSON.stringify(response));
      return response;
  }

}
