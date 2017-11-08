import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { AreaAdministrativaNewPage} from '../areaadministrativa-new/areaadministrativa-new';
import { AreaAdministrativaDetailPage } from '../areaadministrativa-detail/areaadministrativa-detail';
import { AreaAdministrativa } from '../objects/areaAdministrativa';
import { AreaAdministrativaProvider } from '../../providers/areaadministrativa-service/areaadministrativa-service';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private areaService: AreaAdministrativaProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaadministrativaListPage');
  }

  ionViewWillEnter(){
    console.log("will enter")
    this.listarAreas();
  }

  ionViewWillLeave(){
    console.log("will leave");
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
    console.log(this.areas);
  }

  listarAreas(){
    this.areaService.listarAreas().subscribe(
      data =>{
        console.log('Data:'+ data.length);
        console.log(JSON.parse(data));
        let areasResponse = JSON.parse(data);
        if(areasResponse.length>0){
          for(var i=0; i < areasResponse.length; i++){
            var ar = new AreaAdministrativa();
            ar.areaFromJSON(areasResponse[i]);
            this.adicionarArea(ar);
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
    console.log('ionViewDidLoad AreaAdministrativaListPage');
  }

  areaDetail(area : AreaAdministrativa){
    this.navCtrl.push(AreaAdministrativaDetailPage, {area : area})
  }
}
