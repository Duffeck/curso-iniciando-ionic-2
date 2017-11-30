import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Denuncia } from '../objects/denuncia';
import { DenunciaServiceProvider } from '../../providers/denuncia-service/denuncia-service';
import { Usuario } from '../objects/usuario';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the DenunciaNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-denuncia-new',
  templateUrl: 'denuncia-new.html',
})
export class DenunciaNewPage {
  denunciaForm: Denuncia;
  usuario : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private denunciaService: DenunciaServiceProvider,  private userService: UserProvider) {
    this.usuario = this.userService.retornarUsuario();
    this.denunciaForm = new Denuncia();
    this.denunciaForm.usuario = this.usuario;
  }

  ionViewDidLoad() {
  }

  cancelarDenuncia(){
    this.navCtrl.pop();
  }

  salvarDenuncia(denuncia: Denuncia){
    this.denunciaService.denunciar(denuncia).subscribe(
      data=> {
      },
      err => {
      }
    )
  }

}
