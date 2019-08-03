import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { InformativoNewPage } from '../informativo-new/informativo-new';
import { Informativo } from '../objects/informativo';
import { InformativoProvider } from '../../providers/informativo/informativo';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';

import { UserProvider } from '../../providers/user/user';
import { Usuario } from '../objects/usuario';
/**
 * Generated class for the InformativoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-informativo-list',
  templateUrl: 'informativo-list.html',
})
export class InformativoListPage {
  infos : Array<Informativo>;
  usuario : Usuario;
  informativo : Informativo;
  test : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private informativoService: InformativoProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer, private userService: UserProvider) {

  }

  ionViewDidLoad() {
    this.usuario = this.userService.retornarUsuario();
    console.log('ionViewDidLoad InformativoListPage');
  }

  ionViewWillEnter(){
    console.log("will enter");
    if(this.userService.checkarAdm(this.usuario)){
      console.log("É ADM");
      this.test = true;
      this.listarInformativos();
    }else{
      this.test = false;
      this.infos = new Array(0);
      this.informativo = new Informativo();
      this.informativo.titulo = "Acesso Restrito";
      this.informativo.descricao = "Área reservada a administradores YouSustainable";
      this.infos.push(this.informativo);
    }
  }

  ionViewWillLeave(){
    console.log("will leave");
    this.infos = new Array(0);
  }


  newInformativo(){
    this.navCtrl.push(InformativoNewPage);
  }

  adicionarInformativo(info : Informativo){
    if(this.infos == null){
      this.infos = new Array(0);
    }
    this.infos.push(info);
    console.log(this.infos);
  }

  listarInformativos(){
    this.informativoService.listarInformativos().subscribe(
      data =>{
        console.log('Data:'+ data.length);
        console.log(JSON.parse(data));
        let informativosResponse = JSON.parse(data);
        if(informativosResponse.length>0){
          for(var i=0; i < informativosResponse.length; i++){
            var info = new Informativo();
            info.informativoFromJSON(informativosResponse[i]);
            this.adicionarInformativo(info);
          }
          console.log('lengthok');
        }else{
          console.log('0');
        }
      },
      err => {
        console.log('erroooooooooooo');
        console.log(err);
      },
      () => console.log('Completou Requisição'));
    console.log('ionViewDidLoad InformativoListPage');
  }
}
