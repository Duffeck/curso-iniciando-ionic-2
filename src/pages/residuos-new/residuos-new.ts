import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CategoriaSelecionarPage } from '../categoria-selecionar/categoria-selecionar';
import { Categoria } from '../objects/categoria';
import { UserProvider } from '../../providers/user/user';
import { Usuario } from '../objects/usuario';
import { Residuo } from '../objects/residuo';
import { Foto } from '../objects/foto';
import { ResiduoProvider } from '../../providers/residuo/residuo';
import { FotoServiceProvider } from '../../providers/foto-service/foto-service';
/**
* Generated class for the ResiduosNewPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-residuos-new',
  templateUrl: 'residuos-new.html',
})
export class ResiduosNewPage {
  listCategorias = new Categoria().tiposCategorias;
  usuario : Usuario;
  residuoForm : Residuo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private camera: Camera, private userService: UserProvider, private residuoService: ResiduoProvider, private fotoService: FotoServiceProvider) {
    this.residuoForm = new Residuo();
    this.usuario = this.userService.retornarUsuario();
    if(this.usuario != undefined){
      this.residuoForm.usuario = this.usuario;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResiduosNewPage');
  }

  presentPopover(categoria: string) {
    let popover = this.modalCtrl.create(CategoriaSelecionarPage, {categoria});
    popover.onDidDismiss(
      data => {
        console.log(data[0]);
      }
    );
    popover.present();
  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      var foto = new Foto();
      foto.URL = base64Image;
      this.residuoForm.fotos.push(foto);
    }, (err) => {
      console.log(err);
    });
  }

  salvarResiduo(residuo: Residuo){
    console.log("Qtd Fotos:"+residuo.fotos.length);
    if(residuo.fotos.length > 10000){
      for(let i = 0; i < residuo.fotos.length; i++){
        this.fotoService.salvarFoto(residuo.fotos[i]).subscribe(
          data => {
            console.log("salvar foto:");
            console.log(data);
            if(data > 0){
              residuo.fotos[i].id = data;
            }
          },
          err => {
            console.log(err);
          },
          () => {
            this.residuoService.salvarResiduo(residuo).subscribe(
              data => {
                console.log(data);
              },
              err =>{
                console.log(err);
              },
              () => console.log("Completou Requisição")
            );
          }
        );
      }
    }else{
      this.residuoService.salvarResiduo(residuo).subscribe(
        data => {
          console.log(data);
        },
        err =>{
          console.log(err);
        },
        () => console.log("Completou Requisição")
      );
    }
  }
  cancelar(){
    this.navCtrl.pop();
  }
}
