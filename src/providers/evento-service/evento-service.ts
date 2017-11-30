import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Event } from '../../pages/objects/event';
import { Config } from '../config';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Base64 } from '@ionic-native/base64';
//import { Usuario } from '../../pages/objects/usuario';
/*
Generated class for the EventoServiceProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EventoServiceProvider {
  urlPart = "Evento/";
  fileTransfer: FileTransferObject = this.transfer.create();
  constructor(public http: Http, private transfer: FileTransfer, private file: File, private base64: Base64) {
  }

  cadastrarEvento(evento: Event){
    var url = Config.url+this.urlPart+'CadastrarEvento?';
    var options = Config.postOptionsHeader();
    var response = this.http.post(url, evento, options).map(res => res.json());
    return response;
  }

  listarEventos(id_evento: number){
    var url = Config.url+this.urlPart+'ListarEventos?';
    url = url + 'id_evento='+ id_evento
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  transferirArquivo(evento: Event){
    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: evento.id+".jpg",
      chunkedMode: false,
      mimeType: "image/jpg"
    }

    this.fileTransfer.upload(evento.uriFoto, Config.fileServer+'/eventos/', options)
    .then((data) => {
    }, (err) => {
    });
  }

  baixarImagem(evento: Event){
    evento.urlFoto = Config.fileServer+'eventos/'+ evento.id + '.jpg';
  }
}
