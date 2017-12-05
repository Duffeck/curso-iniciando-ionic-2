import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { RotaColetaNewPage } from '../rotacoleta-new/rotacoleta-new';
import { RotaColetaDetailPage } from '../rotacoleta-detail/rotacoleta-detail';
import { RotaColeta } from '../objects/rotacoleta';
import { RotaColetaProvider } from '../../providers/rotacoleta-service/rotacoleta-service';

import { AreaAdministrativa } from '../objects/areaAdministrativa';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';

/**
 * Generated class for the RotacoletaListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rotacoleta-list',
  templateUrl: 'rotacoleta-list.html',
})
export class RotaColetaListPage {
  rotas : Array<RotaColeta>
  rota : RotaColeta
  area : AreaAdministrativa;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rotaColetaService : RotaColetaProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.area = navParams.get("area");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RotacoletaListPage');
  }

  newRota(){
    var area = this.area;
    this.navCtrl.push(RotaColetaNewPage, {area : this.area});
  }

  rotaDetail(rota){
    rota.area = this.area;
    this.navCtrl.push(RotaColetaDetailPage, {rota : rota});
  }

  ionViewWillEnter(){
    console.log("will enter")
    this.listarRotas();
  }

  ionViewWillLeave(){
    console.log("will leave");
    this.rotas = new Array(0);
  }

  lerStatus(rota){
    if(rota.status == "true"){
      rota.status_ = "Ativa";
    }else{
      rota.status_ = "Inativa";
    }
    console.log(rota.status_);
  }

  adicionarRotaDescarte(rota : RotaColeta){
    if(this.rotas == null){
      this.rotas = new Array(0);
    }
    this.lerStatus(rota);
    this.rotas.push(rota);
    console.log(this.rotas);
  }

  listarRotas(){
    this.rotaColetaService.listarRotas(this.area.id).subscribe(
      data =>{
        console.log('Data:'+ data.length);
        console.log(JSON.parse(data));
        let rotasResponse = JSON.parse(data);
        if(rotasResponse.length>0){
          for(var i=0; i < rotasResponse.length; i++){
            var rc = new RotaColeta();
            rc.rotaFromJSON(rotasResponse[i]);
            /*if(rc.areaId==this.area.id){
                console.log("entrou");*/
                this.adicionarRotaDescarte(rc);
            //}

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
    console.log('ionViewDidLoad rotasdescarteListPage');
  }

}
