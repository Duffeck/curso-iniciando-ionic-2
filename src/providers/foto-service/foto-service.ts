import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';
import { Foto } from '../../pages/objects/foto';

/*
  Generated class for the FotoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FotoServiceProvider {
  urlPart : string = "Foto";
  constructor(public http: Http) {
    console.log('Hello FotoServiceProvider Provider');
  }

  salvarFoto(foto: Foto){
    let url = Config.url + this.urlPart + "/SalvarFoto/?";
    url = url+"URL="+foto.URL;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    console.log(response);
    return response;
  }
}
