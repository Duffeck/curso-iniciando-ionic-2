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
  fotoTransmitida: Foto;

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
    return new Promise(
      (resolve, reject)=>{
        console.log('tentando transferir');
        let options: FileUploadOptions = {
          fileKey: "file",
          fileName: foto.id+".jpg",
          chunkedMode: false,
          mimeType: "image/jpg"
        }

        this.fileTransfer.upload(foto.URL, Config.fileServer+'/residuos/', options).then(
          (data) => {
            foto.URL = Config.fileServer+'residuos/'+ foto.id + '.jpg';
            console.log('upou');
            console.log(foto);
            resolve(foto);
          }).catch(
            (err) => {
              console.log('errou');
              console.log(err);
              reject(err);
            });
          }
        );
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
