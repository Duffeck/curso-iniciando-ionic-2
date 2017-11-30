import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CategoriaSelecionarPage } from '../categoria-selecionar/categoria-selecionar';
import { Categoria } from '../objects/categoria';
import { ResiduosNewPage } from '../residuos-new/residuos-new';
import { UserProvider } from '../../providers/user/user';
import { ResiduoProvider } from '../../providers/residuo/residuo';
import { Usuario } from '../objects/usuario';
import { Residuo } from '../objects/residuo';
import { MapaPontosPage } from '../mapa-pontos/mapa-pontos';
/**
* Generated class for the ResiduosPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-residuos',
  templateUrl: 'residuos.html',
})
export class ResiduosPage {
  listCategorias = new Categoria().tiposCategorias;
  shownGroup = null;
  usuario : Usuario;
  residuos: Array<Residuo>;
  residuosPrincipal: Array<Residuo>;
  filtro: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private userService: UserProvider, private residuoService: ResiduoProvider) {
    this.residuos = new Array(0);
  }

  ionViewDidLoad() {
    this.usuario = this.userService.retornarUsuario();
  }

  ionViewWillEnter() {
    this.residuos = new Array();
    this.listarResiduos();
    this.residuos = this.residuosPrincipal;
  }

  ionViewWillLeave() {
    this.residuos = new Array(0);
  }

  presentPopover(categoria: string) {
    let popover = this.modalCtrl.create(CategoriaSelecionarPage, {categoria});
    popover.present();
  }

  novoResiduo(){
    this.navCtrl.push(ResiduosNewPage);
  }

  listarResiduos(id_residuo: number = 0){
    this.residuosPrincipal = new Array<Residuo>();
    this.residuoService.listarResiduos(id_residuo).subscribe(
      data => {
        let residuosResponse = JSON.parse(data);
        if(residuosResponse.length > 0){
          for(let i = 0; i < residuosResponse.length; i++){
            var resid = new Residuo();
            resid.residuoFromJSON(residuosResponse[i]);
            this.adicionarResiduoLista(resid);
          }
        }
      },
      err => {

      }
    );
  }

  adicionarResiduoLista(residuo: Residuo){
    //this.residuoService.baixarImagem(residuo);
    this.residuosPrincipal.push(residuo);
  }

  mostrarMapa(categoria: Categoria){
    this.navCtrl.push(MapaPontosPage, {'categoria' : categoria});
  }

  getItems(ev: any) {
    this.filtro = ev.target.value;
    // Reset items back to all of the items
    this.residuos = this.residuosPrincipal;

    // set val to the value of the searchbar
    let val = ev.target.value;
    let arr_aux = new Array<Residuo>();
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.residuos = this.residuos.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
