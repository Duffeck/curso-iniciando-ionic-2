import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventNewPage } from '../event-new/event-new';
import { EventDetailPage } from '../event-detail/event-detail';
import { Event } from '../objects/event';
import { Usuario } from '../objects/usuario';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { UserProvider } from '../../providers/user/user';

/**
* Generated class for the EventListPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  eventos : Array<Event>;
  usuario : Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider, private eventoService: EventoServiceProvider) {
    this.eventos = new Array(0);
    this.usuario = this.userService.retornarUsuario();
    this.listarEventos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

  listarEventos(id_evento: number = 0){
    this.eventoService.listarEventos(id_evento).subscribe(
      data =>{
        let eventosResponse = JSON.parse(data);
        if(eventosResponse.length>0){
          for(var i=0; i < eventosResponse.length; i++){
            var ev = new Event();
            ev.eventoFromJSON(eventosResponse[i]);
            this.adicionarEventoLista(ev);
          }
        }
      },
      err => {
        console.log(err);
      },
      () => (console.log('Completou Requisição')

    ));
  }

  newEvent(){
    this.navCtrl.push(EventNewPage);
  }

  adicionarEventoLista(evento: Event){
    if(this.eventos == null){
      this.eventos = new Array(0);
    }
    this.eventoService.baixarImagem(evento)
    this.eventos.push(evento);
    console.log(this.eventos);
  }
  eventDetail(event: Event){
    this.navCtrl.push(EventDetailPage, {evento: event});
  }
}
