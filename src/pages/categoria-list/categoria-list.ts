import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaNewPage } from '../categoria-new/categoria-new';
import { UserProvider } from '../../providers/user/user';
import { Usuario } from '../objects/usuario';
import { CategoriaServiceProvider } from '../../providers/categoria-service/categoria-service';
import { Categoria } from '../objects/categoria';
/**
* Generated class for the CategoriaListPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-categoria-list',
  templateUrl: 'categoria-list.html',
})
export class CategoriaListPage {
  usuario : Usuario;
  listaCategorias: Array<Categoria>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider, private categoriaService: CategoriaServiceProvider) {
    this.usuario = this.userService.retornarUsuario();
    this.listaCategorias = new Array<Categoria>();
  }

  ionViewWillEnter(){
    this.listarCategorias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaListPage');
  }

  novaCategoria(){
    this.navCtrl.push(CategoriaNewPage);
  }

  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe(
      data=>{
        var resposta = JSON.parse(data);
        console.log(resposta);
        if(resposta.length > 0){
          for(var i = 0; i < resposta.length; i ++){
            var categoria = new Categoria();
            this.listaCategorias.push(categoria.categoriaFromJSON(resposta[i]));
          }
        }
        console.log(this.listaCategorias);
      },
      err=>{
        console.log('Erro listar');
        console.log(err)
      },
      () => console.log("Completou Requisição"));
    }
  }
