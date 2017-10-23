import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FotoServiceProvider } from '../../providers/foto-service/foto-service';
import { Foto } from '../objects/foto';
//import { File } from '@ionic-native/file';
/**
* Generated class for the FileTransferTestePage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-file-transfer-teste',
  templateUrl: 'file-transfer-teste.html',
})
export class FileTransferTestePage {
  //fileTransfer: FileTransfer;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: FileTransfer, private fotoService: FotoServiceProvider) {
  }

  fileTransfer: FileTransferObject = this.transfer.create();

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileTransferTestePage');
  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.transferirArquivo(imageData);
    }, (err) => {
      console.log(err);
    });
  }

  transferirArquivo(arquivo: string){
    var foto = new Foto();
    foto.URL = 'desativado';
    this.fotoService.salvarFoto(foto).subscribe(
      data => {
        console.log(data);
        if(data > 0){
          console.log('tentando transferir');
          let options: FileUploadOptions = {
            fileKey: "file",
            fileName: data+".png",
            chunkedMode: false,
            mimeType: "image/png"
          }

          this.fileTransfer.upload(arquivo, 'http://192.168.0.19:55869/residuos/', options)
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
      },
      err => {
        console.log('erro');
        console.log(err);
      },
      () => console.log("Completou Requisicao")
    );
  }
}
