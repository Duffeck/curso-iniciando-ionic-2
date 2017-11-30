import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { CategoriaSelecionarPage } from '../categoria-selecionar/categoria-selecionar';
import { Categoria } from '../objects/categoria';
import { UserProvider } from '../../providers/user/user';
import { Usuario } from '../objects/usuario';
import { Residuo } from '../objects/residuo';
import { Foto } from '../objects/foto';
import { ResiduoProvider } from '../../providers/residuo/residuo';
import { FotoServiceProvider } from '../../providers/foto-service/foto-service';
import { CategoriaServiceProvider } from '../../providers/categoria-service/categoria-service';
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
  listaCategorias : Array<Categoria>;
  usuario : Usuario;
  residuoForm : Residuo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private camera: Camera, private userService: UserProvider, private residuoService: ResiduoProvider, private fotoService: FotoServiceProvider, private categoriaService: CategoriaServiceProvider) {
    this.residuoForm = new Residuo();
    this.residuoForm.categoria = new Categoria();
    this.usuario = this.userService.retornarUsuario();
    this.listaCategorias = new Array<Categoria>();
    //this.listTiposCategorias = {origem: [], periculosidade: [], composicao: [], tipo: []};
    if(this.usuario != undefined){
      this.residuoForm.usuario = this.usuario;
    }
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.listarCategorias();
  }

  unitSelectionChangeModal(catego: Categoria){
    this.residuoForm.categoria = catego;
  }
  /*
  presentPopover(categoria: string) {
  let popover = this.modalCtrl.create(CategoriaSelecionarPage, {categoria});
  popover.onDidDismiss(
  data => {
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
if(data.categoria == 'tipo'){
this.listTiposCategorias.tipo = data.categoriasSelecionadas;
this.residuoForm.categoria.tipos = data.categoriasSelecionadas;
}
}
);
popover.present();
}
*/
tirarFoto(){
  const options: CameraOptions = {
    quality: 50,
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
    try{
      this.salvarFoto(foto).then(
        (data: Foto)=>{
          this.residuoForm.fotos.push(data);
        }
      ).catch(err =>{
        err=>{
        }
      });
      if( foto.id > 0 && foto.URL != ""){
        this.residuoForm.fotos.push(foto);
      }
    }catch(err){
    }
    /*
    this.base64.encodeFile(imageData).then((base64File: string) => {
    foto.base64 = base64File;
  }, (err) => {
});
*/
}, (err) => {
});
}

salvarFoto(foto: Foto){
  return new Promise((resolve, reject) => {
    this.fotoService.salvarFoto(foto).subscribe(
      data => {
        if(data > 0){
          foto.id = data;
          this.fotoService.transferirArquivo(foto).then(
            data=>{
              resolve(data);
            }).catch(err=>{
              reject(err);
            });
          }
        },
        err => {
        }
      );
    });
  }

  salvarResiduo(residuo: Residuo){
    this.residuoService.salvarResiduo(residuo).subscribe(
      data => {
      },
      err =>{
      }
    );
  }

  cancelar(){
    this.navCtrl.pop();
  }

  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe(
      data=>{
        var resposta = JSON.parse(data);
        if(resposta.length > 0){
          for(var i = 0; i < resposta.length; i ++){
            var categoria = new Categoria();
            this.listaCategorias.push(categoria.categoriaFromJSON(resposta[i]));
          }
        }
      },
      err=>{
      });
    }
}
