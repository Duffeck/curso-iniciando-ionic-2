import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
import { RotaColeta } from '../objects/rotacoleta';
import { RotaColetaProvider } from '../../providers/rotacoleta-service/rotacoleta-service';
import { AreaAdministrativa } from '../objects/areaAdministrativa';


/**
 * Generated class for the RotacoletaNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rotacoleta-new',
  templateUrl: 'rotacoleta-new.html',
})
export class RotaColetaNewPage {
  rotaForm : RotaColeta;
  areaTest : AreaAdministrativa;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rotaService: RotaColetaProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer){
    this.rotaForm = new RotaColeta();
    this.areaTest = new AreaAdministrativa();
    this.areaTest = navParams.get("area");
    this.rotaForm.areaId = this.areaTest.id;
    console.log(this.rotaForm);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RotacoletaNewPage');
  }

  cancelarRota(){
    this.navCtrl.pop();
  }

  salvarRota(rotaForm){
    console.log(rotaForm.nome);
    this.rotaService.cadastrarRotaColeta(rotaForm).subscribe(
          data => {
            console.log('Resposta');
            console.log(data);
          },
          err => {
            console.log('Erro');
            console.log(err);
          },
          () => console.log('Completou Requisição')
      );
    this.navCtrl.pop();
  }

}
