import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categoria } from  '../objects/categoria';
import { CategoriaServiceProvider } from '../../providers/categoria-service/categoria-service'

/**
 * Generated class for the CategoriaSelecionarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categoria-selecionar',
  templateUrl: 'categoria-selecionar.html',
})
export class CategoriaSelecionarPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriaService: CategoriaServiceProvider) {

    console.log(navParams.data.categoria);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaSelecionarPage');
  }

}
