import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Event } from '../../pages/objects/event';
import { Config } from '../config';

/*
  Generated class for the EventoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EventoServiceProvider {
  urlPart = "Evento/";
  constructor(public http: Http) {
    console.log('Hello EventoServiceProvider Provider');
  }

  cadastrarEvento(evento: Event){
      var url = Config.url+this.urlPart+'CadastrarEvento?';
      url = url + 'bairro=' + evento.bairro;
      url = url + '&cidade=' + evento.cidade;
      url = url + '&data=' + evento.data;
      url = url + '&descricao=' + evento.descricao;
      url = url + '&estado=' + evento.estado;
      url = url + '&nome=' + evento.nome;
      url = url + '&numero=' + evento.numero;
      url = url + '&rua=' + evento.rua;
      url = url + '&urlFoto=' + evento.urlFoto;
      console.log(url);
      var response = this.http.get(url).map(res => res.json());
      return response;
  }

  listarEventos(id_evento: number){
    var url = Config.url+this.urlPart+'ListarEventos?';
    url = url + 'id_evento='+ id_evento
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(JSON.stringify(response));
    return response;
  }
}
