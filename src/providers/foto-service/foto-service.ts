import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';
import { Foto } from '../../pages/objects/foto';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

/*
  Generated class for the FotoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FotoServiceProvider {
  urlPart : string = "Foto";
  fileTransfer: FileTransferObject = this.transfer.create();
  constructor(public http: Http, private transfer: FileTransfer) {
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

  transferirArquivo(foto: Foto){
      console.log('tentando transferir');
      let options: FileUploadOptions = {
        fileKey: "file",
        fileName: foto.id+".png",
        chunkedMode: false,
        mimeType: "image/png"
      }

      this.fileTransfer.upload(foto.URL, Config.fileServer+'/residuos/', options)
      .then((data) => {
        // success
        console.log('sucesso');
        console.log(data);
      }, (err) => {
        // error
        console.log('erro');
        console.log(err);
      });
  }
}
