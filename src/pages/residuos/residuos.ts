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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private userService: UserProvider, private residuoService: ResiduoProvider) {
    this.residuos = new Array(0);
  }

  ionViewDidLoad() {
    this.usuario = this.userService.retornarUsuario();
    console.log('ionViewDidLoad ResiduosPage');
  }

  ionViewWillEnter() {
    this.residuos = new Array();
    this.listarResiduos();
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
    this.residuoService.listarResiduos(id_residuo).subscribe(
      data => {
        let residuosResponse = JSON.parse(data);
        if(residuosResponse.length > 0){
          for(let i = 0; i < residuosResponse.length; i++){
            var resid = new Residuo();
            console.log(residuosResponse[i]);
            resid.residuoFromJSON(residuosResponse[i]);
            this.adicionarResiduoLista(resid);
          }
        }
      },
      err => {

      },
      () => console.log(this.residuos)
    );
  }

  adicionarResiduoLista(residuo: Residuo){
    this.residuoService.baixarImagem(residuo);
    //console.log(residuo);
    this.residuos.push(residuo);
  }

  mostrarMapa(categoria: Categoria){
    this.navCtrl.push(MapaPontosPage, {'categoria' : categoria});
  }
}
