import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { ZonaVerde } from '../objects/zonaverde';
import { ZonaverdeProvider } from '../../providers/zonaverde/zonaverde';
import { ZonaVerdePage } from '../zonaverde/zonaverde';
import { ZonaVerdeDetailPage } from '../zonaverde-detail/zonaverde-detail';

import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ZonaverdePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-zonaverde',
  templateUrl: 'zonaverde-list.html',
})
export class ZonaVerdeListPage {
  zonaForm : ZonaVerde;
  zonas : Array<ZonaVerde>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private zonaVerdeService : ZonaverdeProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
    this.zonaForm = new ZonaVerde();
  }

  cancelarZonaVerde(){
    this.navCtrl.pop();
  }

 zonaVerdeDetail(zona : ZonaVerde){
   this.navCtrl.push(ZonaVerdeDetailPage, {zona : zona})
 }

  newZona(){
    this.navCtrl.push(ZonaVerdePage);
  }


  ionViewDidLoad() {
    this.zonaVerdeService.listarZonasVerdes().subscribe(
      data =>{
        let zonasResponse = JSON.parse(data);
        if(zonasResponse.length>0){
          for(var i=0; i < zonasResponse.length; i++){
            var zn = new ZonaVerde();
            zn.zonaFromJSON(zonasResponse[i]);
            this.adicionarZonaVerde(zn);
          }
        }else{
        }
      },
      err => {
      });
  }

  adicionarZonaVerde(zona : ZonaVerde){
    if(this.zonas == null){
      this.zonas = new Array(0);
    }
    this.zonas.push(zona);
  }
}
