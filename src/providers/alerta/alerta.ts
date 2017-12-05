import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';
import { Alerta } from '../../pages/objects/alerta';

/*
  Generated class for the AlertaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlertaProvider {
  urlPart = "Alerta/";
  constructor(public http: Http) {
  }

  listarAlertas(){
    var url = Config.url+this.urlPart+'ListarAlertas';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  cadastrarAlerta(alerta: Alerta){
        var url = Config.url+this.urlPart+'cadastrarAlerta?';
        /*url = url 'estado=' alerta.estado;
        url = url '&descricao=' alerta.descricao;
        url = url '&latitude=' zonaverde.localizacao.latitude;
        url = url '&longitude=' zonaverde.localizacao.longitude;*/
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}
