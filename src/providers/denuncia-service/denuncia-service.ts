import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../../pages/objects/usuario';
import { Denuncia } from '../../pages/objects/denuncia';
import { Config } from '../config';
import { Observable } from "rxjs/Observable";

/*
Generated class for the DenunciaServiceProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DenunciaServiceProvider {
  urlPart = "Denuncia/";
  constructor(public http: Http) {
  }

  denunciar(denuncia: Denuncia){
    if(denuncia.usuario.id != undefined){
      var url = Config.url+this.urlPart+'Denunciar?';
      console.log(url);
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({method: 'post', headers: headers});
      console.log(denuncia);
      var response = this.http.post(url, denuncia, options).map(res => res.json());
      console.log(JSON.stringify(response));
      return response;
    }
    return Observable.create(
      observer => {
        observer.next(1);
        observer.complete(2);
      }
    );
  }

  listarDenuncias(){
    var url = Config.url + this.urlPart+'ListarDenuncias/'
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
