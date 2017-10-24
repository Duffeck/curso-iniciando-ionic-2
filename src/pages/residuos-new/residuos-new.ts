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
import { Base64 } from '@ionic-native/base64';
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
  listCategorias : Array<any>;
  listTiposCategorias: any;
  usuario : Usuario;
  residuoForm : Residuo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private camera: Camera, private userService: UserProvider, private residuoService: ResiduoProvider, private fotoService: FotoServiceProvider, private base64: Base64) {
    this.residuoForm = new Residuo();
    this.residuoForm.categoria = new Categoria();
    this.usuario = this.userService.retornarUsuario();
    this.listCategorias = new Categoria().tiposCategorias;
    this.listTiposCategorias = {origem: [], periculosidade: [], composicao: [], tipo: []};
    if(this.usuario != undefined){
      this.residuoForm.usuario = this.usuario;
    }
    console.log(this.listCategorias);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResiduosNewPage');
  }

  presentPopover(categoria: string) {
    let popover = this.modalCtrl.create(CategoriaSelecionarPage, {categoria});
    popover.onDidDismiss(
      data => {
        console.log(data);
        console.log(data.categoria);
        if(data.categoria == 'origem'){
          this.listTiposCategorias.origem = data.categoriasSelecionadas;

          this.residuoForm.categoria.origens = data.categoriasSelecionadas;
        }
        if(data.categoria == 'periculosidade'){
          this.listTiposCategorias.periculosidade = data.categoriasSelecionadas;
          this.residuoForm.categoria.periculosidades = data.categoriasSelecionadas;
        }
        if(data.categoria == 'composicao'){
          this.listTiposCategorias.composicao = data.categoriasSelecionadas;
          this.residuoForm.categoria.composicoesQuimicas = data.categoriasSelecionadas;
        }
        if(data.listTiposCategorias == 'tipo'){
          this.listTiposCategorias.tipo = data.categoriasSelecionadas;
          this.residuoForm.categoria.tipos = data.categoriasSelecionadas;
        }
        console.log(this.listTiposCategorias);
      }
    );
    popover.present();
  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    this.camera.getPicture(options).then((imageData) => {
      var foto = new Foto();
      foto.URL = imageData;
      this.base64.encodeFile(imageData).then((base64File: string) => {
        foto.base64 = base64File;
      }, (err) => {
        console.log(err);
      });
      this.residuoForm.fotos.push(foto);
      console.log(this.residuoForm);
    }, (err) => {
      console.log(err);
    });
  }

  salvarResiduo(residuo: Residuo){
    console.log("Qtd Fotos:"+residuo.fotos.length);
    if(residuo.fotos.length > 0){
      for(let i = 0; i < residuo.fotos.length; i++){
        this.fotoService.salvarFoto(residuo.fotos[i]).subscribe(
          data => {
            console.log("salvar foto:");
            console.log(data);
            if(data > 0){
              residuo.fotos[i].id = data;
              console.log(residuo.fotos[i]);
              this.fotoService.transferirArquivo(residuo.fotos[i]);
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
