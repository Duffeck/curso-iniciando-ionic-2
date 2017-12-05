import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CategoriaSelecionarPage } from '../categoria-selecionar/categoria-selecionar';
import { Categoria } from '../objects/categoria';
import { CategoriaServiceProvider } from '../../providers/categoria-service/categoria-service';

@IonicPage()
@Component({
  selector: 'page-categoria-new',
  templateUrl: 'categoria-new.html',
})
export class CategoriaNewPage {
  listCategorias : Array<any>;
  listTiposCategorias: any;
  categoriaForm: Categoria;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private categoriaService: CategoriaServiceProvider) {
    this.categoriaForm = new Categoria();
    this.listCategorias = this.categoriaForm.tiposCategorias;
    this.listTiposCategorias = {origem: [], periculosidade: [], composicao: [], tipo: []};
  }

  ionViewDidLoad() {
  }

  presentModal(categoria: string) {
    let modal = this.modalCtrl.create(CategoriaSelecionarPage, {categoria});
    modal.onDidDismiss(
      data => {
        if(data.categoria == 'origem'){
          this.listTiposCategorias.origem = data.categoriasSelecionadas;

          this.categoriaForm.origens = data.categoriasSelecionadas;
        }
        if(data.categoria == 'periculosidade'){
          this.listTiposCategorias.periculosidade = data.categoriasSelecionadas;
          this.categoriaForm.periculosidades = data.categoriasSelecionadas;
        }
        if(data.categoria == 'composicao'){
          this.listTiposCategorias.composicao = data.categoriasSelecionadas;
          this.categoriaForm.composicoesQuimicas = data.categoriasSelecionadas;
        }
        if(data.categoria == 'tipo'){
          this.listTiposCategorias.tipo = data.categoriasSelecionadas;
          this.categoriaForm.tipos = data.categoriasSelecionadas;
        }
      }
    );
    modal.present();
  }

  salvarCategoria(categoria: Categoria){
    this.categoriaService.cadastrarCategoria(categoria).subscribe(
      data => {

      },
      err => {

      }
    );
    this.navCtrl.pop();
  }
}
