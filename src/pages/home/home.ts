import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InformativoProvider } from '../../providers/informativo/informativo';
import { Informativo } from '../objects/informativo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
informativo : Informativo;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public informativoProvider : InformativoProvider) {
        this.informativoProvider.informativoAleatorio().subscribe(
              data => {
                if(data){
                  this.informativo = new Informativo();
                  this.informativo.informativoFromJSON(JSON.parse(data));
                  this.showAlert();
                }
              },
              err => {
              },
              () => {}
          );

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.informativo.titulo,
      subTitle: this.informativo.descricao,
      buttons: ['OK']
    });
    alert.present();
  }

}
