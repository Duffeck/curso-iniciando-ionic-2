import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';

import { PontosDescartePage } from '../pontosdescarte-new/pontosdescarte-new';
import { PontosDescarteDetailPage } from '../pontosdescarte-detail/pontosdescarte-detail';
import { PontoDescarte } from '../objects/pontodescarte';
import { PontosDescarteProvider } from '../../providers/pontosdescarte/pontosdescarte';

import { AreaAdministrativa } from '../objects/areaAdministrativa';

import { Usuario } from '../objects/usuario';
import { UserProvider } from '../../providers/user/user';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
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
  area : AreaAdministrativa;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pontosDescarteService: PontosDescarteProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.area = navParams.get("area");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PontosDescarteListPageo');
  }

  ionViewWillEnter(){
    console.log("will enter")
    this.listarPontos();
  }

  ionViewWillLeave(){
    console.log("will leave");
    this.pontos = new Array(0);
  }

  adicionarPontoDescarte(ponto : PontoDescarte){
    if(this.pontos == null){
      this.pontos = new Array(0);
    }
    this.pontos.push(ponto);
    console.log(this.pontos);
  }
  newPonto(){
    this.navCtrl.push(PontosDescartePage);
  }

  pontosDescarteDetail(ponto : PontoDescarte){
    this.navCtrl.push(PontosDescarteDetailPage, {ponto: ponto});
  }

  listarPontos(){
    if(this.area==null){
      this.pontosDescarteService.listarPontosDescarte().subscribe(
        data =>{
          console.log('Data:'+ data.length);
          console.log(JSON.parse(data));
          let pontosResponse = JSON.parse(data);
          if(pontosResponse.length>0){
            for(var i=0; i < pontosResponse.length; i++){
              var pd = new PontoDescarte();
              pd.pontoFromJSON(pontosResponse[i]);
              this.adicionarPontoDescarte(pd);
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
      }else{
        this.pontosDescarteService.listarPontosDescarteArea(this.area.id).subscribe(
          data =>{
            console.log('Data:'+ data.length);
            console.log(JSON.parse(data));
            let pontosResponse = JSON.parse(data);
            if(pontosResponse.length>0){
              for(var i=0; i < pontosResponse.length; i++){
                var pd = new PontoDescarte();
                pd.pontoFromJSON(pontosResponse[i]);
                this.adicionarPontoDescarte(pd);
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
      }
    console.log('ionViewDidLoad PontosdescarteListPage');
  }

}
