import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';
import { Residuo } from '../../pages/objects/residuo';

/*
Generated class for the ResiduoProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ResiduoProvider {
  urlPart : string = "Residuo";
  constructor(public http: Http) {
    console.log('Hello ResiduoProvider Provider');
  }

  salvarResiduo(residuo: Residuo){
    let url = Config.url + this.urlPart + "/SalvarResiduo/?";
    //residuo.categoria;
    if(residuo.descricao != undefined){
      url = url + "Descricao="+residuo.descricao;
    }
    if(residuo.estado != undefined){
      url = url + "&Estado="+residuo.estado;
    }
    if(residuo.nome != undefined){
      url = url + "&Nome="+residuo.nome;
    }
    if(residuo.observacao != undefined){
      url = url + "&Observacao="+residuo.observacao;
    }
    /*
    if(residuo.fotos.length>0){
      for(var i = 0; i < residuo.fotos.length; i++){
        url = url + "&id_fotos=" + residuo.fotos[i].id;
      }
    }*/

    

    //url = url +residuo.usuario;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(response);
    return response;
  }
}
