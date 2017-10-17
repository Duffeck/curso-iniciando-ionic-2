import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
  selecao: Array<any>;
  categoriasSelecionadas: Array<any>;
  categoria: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriaService: CategoriaServiceProvider, public viewCtrl: ViewController) {
    var categoria = new Categoria();
    this.categorias = new Array();
    this.selecao = new Array();
    this.categoriasSelecionadas = new Array();
    this.categoria = navParams.data.categoria;
    categoriaService.listarComponentesCategoria(this.categoria).subscribe(
      data => {
        var categoria_json = JSON.parse(data);
        if(categoria_json.length > 0){
          for(var i = 0; i < categoria_json.length; i++){
            this.categorias.push(categoria.componenteCategoriaFromJSON(categoria_json[i], this.categoria));
          }
        }
      },
      err => {},
      () => console.log('Completou Requisição')
    );
    console.log(this.categorias);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaSelecionarPage');
  }

  close(){
    var categoria = this.categoria;
    var categoriasSelecionadas = this.categoriasSelecionadas;
    this.viewCtrl.dismiss({categoria, categoriasSelecionadas});
  }

  selecionarCategoria(value){
    this.categoriasSelecionadas = new Array();
    for(let categoria of this.categorias){
      if(this.selecao[categoria.id]){
        this.categoriasSelecionadas.push(categoria);
      }
    }
  }

}
