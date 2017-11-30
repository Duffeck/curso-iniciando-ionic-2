import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';
import { Residuo } from '../../pages/objects/residuo';
import { Foto } from '../../pages/objects/foto';

/*
Generated class for the ResiduoProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ResiduoProvider {
  urlPart : string = "Residuo";
  constructor(public http: Http) {
  }

  salvarResiduo(residuo: Residuo){
    let url = Config.url + this.urlPart + "/SalvarResiduo/?";
    var options = Config.postOptionsHeader();
    var response = this.http.post(url, residuo, options).map(res => res.json());
    return response;
  }

  listarResiduos(ultimoId: number = 0){
    let url = Config.url + this.urlPart + "/ListarResiduos/?";
    url = url + "ultimoId=" + ultimoId;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  baixarImagem(residuo: Residuo){
    var foto = new Foto();
    foto.URL = Config.fileServer+'residuos/'+ residuo.id + '.jpg';
    residuo.fotos.push(foto);
  }
}
