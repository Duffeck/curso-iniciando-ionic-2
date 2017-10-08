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
  categorias : Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriaService: CategoriaServiceProvider) {
    var categoria = new Categoria();
    this.categorias = new Array();
    console.log(navParams.data.categoria);
    categoriaService.listarComponentesCategoria(navParams.data.categoria).subscribe(
      data => {
        var categoria_json = JSON.parse(data);
        if(categoria_json.length > 0){
          for(var i = 0; i < categoria_json.length; i++){
            this.categorias.push(categoria.componenteCategoriaFromJSON(categoria_json[i], navParams.data.categoria));
          }
        }
      },
      err => {},
      () => console.log('Completou Requisição')
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaSelecionarPage');
  }

}
