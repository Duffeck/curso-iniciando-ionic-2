import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { AreaAdministrativaNewPage} from '../areaadministrativa-new/areaadministrativa-new';
import { AreaAdministrativa } from '../objects/areaAdministrativa';
import { AreaAdministrativaServiceProvider } from '../../providers/areaadministrativa-service/areaadministrativa-service';

import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the AreaadministrativaListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-areaadministrativa-list',
  templateUrl: 'areaadministrativa-list.html',
})
export class AreaAdministrativaListPage {
  areas: Array<AreaAdministrativa>
  constructor(public navCtrl: NavController, public navParams: NavParams, private areaService: AreaAdministrativaServiceProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.listarAreas();
  }

  ionViewWillLeave(){
    this.areas = new Array(0);
  }

   newArea(){
    this.navCtrl.push(AreaAdministrativaNewPage);
  }

  adicionarArea(area : AreaAdministrativa){
    if(this.areas == null){
      this.areas = new Array(0);
    }
    this.areas.push(area);
  }

  listarAreas(){
    this.areaService.listarAreas().subscribe(
      data =>{
        let pontosResponse = JSON.parse(data);
        if(pontosResponse.length>0){
          for(var i=0; i < pontosResponse.length; i++){
            var ar = new AreaAdministrativa();
            ar.areaFromJSON(pontosResponse[i]);
            this.adicionarArea(ar);
          }
        }else{
        }
      },
      err => {

      });
  }
}
