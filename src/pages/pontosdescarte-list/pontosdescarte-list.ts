import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';

import { PontosDescartePage } from '../pontosdescarte-new/pontosdescarte-new';
import { PontosDescarteDetailPage } from '../pontosdescarte-detail/pontosdescarte-detail';
import { PontoDescarte } from '../objects/pontodescarte';
import { PontosDescarteProvider } from '../../providers/pontosdescarte/pontosdescarte';

import { DomSanitizer } from '@angular/platform-browser';
/**
* Generated class for the PontosdescarteListPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-pontosdescarte-list',
  templateUrl: 'pontosdescarte-list.html',
})
export class PontosDescarteListPage {
  pontos: Array<PontoDescarte>
  constructor(public navCtrl: NavController, public navParams: NavParams, private pontosDescarteService: PontosDescarteProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {

  }

  ionViewDidLoad() {

  }

  ionViewWillEnter(){
    this.listarPontos();
  }

  ionViewWillLeave(){
    this.pontos = new Array(0);
  }

  adicionarPontoDescarte(ponto : PontoDescarte){
    if(this.pontos == null){
      this.pontos = new Array(0);
    }
    this.pontos.push(ponto);
  }
  newPonto(){
    this.navCtrl.push(PontosDescartePage);
  }

  pontosDescarteDetail(ponto : PontoDescarte){
    this.navCtrl.push(PontosDescarteDetailPage, {ponto: ponto});
  }

  listarPontos(){
    this.pontosDescarteService.listarPontosDescarte().subscribe(
      data =>{
        let pontosResponse = JSON.parse(data);
        if(pontosResponse.length>0){
          for(var i=0; i < pontosResponse.length; i++){
            var pd = new PontoDescarte();
            pd.pontoFromJSON(pontosResponse[i]);
            this.adicionarPontoDescarte(pd);
          }
        }else{
        }
      },
      err => {
      });
    }
  }
