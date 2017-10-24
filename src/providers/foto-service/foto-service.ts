import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config';
import { Foto } from '../../pages/objects/foto';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Base64 } from '@ionic-native/base64';

@Injectable()
export class FotoServiceProvider {
  urlPart : string = "Foto";
  fileTransfer: FileTransferObject = this.transfer.create();
  constructor(public http: Http, private transfer: FileTransfer, private file: File, private base64: Base64) {
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
        fileName: foto.id+".jpg",
        chunkedMode: false,
        mimeType: "image/jpg"
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

  baixarImagem(foto: Foto){
    this.fileTransfer.download(Config.fileServer+'residuos/'+ foto.id + '.jpg', this.file.cacheDirectory +'/'+ foto.id + '.jpg').then((entry) => {
      foto.URL = entry.toURL();
      this.base64.encodeFile(entry.toURL()).then((base64File: string) => {
        foto.base64 = base64File;
      }, (err) => {
        console.log(err);
      });
    }, (error) => {
      console.log(error);
    });
  }
}
