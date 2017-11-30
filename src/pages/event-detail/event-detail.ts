import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Event } from '../objects/event';
import { Usuario } from '../objects/usuario';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { UserProvider } from '../../providers/user/user';
import { DenunciaNewPage } from '../denuncia-new/denuncia-new';

/**
 * Generated class for the EventDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  evento : Event;
  usuario : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider, private eventoService: EventoServiceProvider) {
    this.evento = navParams.get('evento');
  }

  ionViewDidLoad() {
    this.usuario = this.userService.retornarUsuario();
  }

  denunciar(evento: Event){
    this.navCtrl.push(DenunciaNewPage);
    /*
    if(this.usuario != undefined){
      this.eventoService.denunciarEvento(evento, this.usuario);
    }*/
  }
}
