import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventNewPage } from '../event-new/event-new';
import { EventDetailPage } from '../event-detail/event-detail';
import { Event } from '../objects/event';
import { Usuario } from '../objects/usuario';
//import { EventResource } from '../objects/eventResource';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { UserProvider } from '../../providers/user/user';

import { AreaAdministrativa } from '../objects/areaAdministrativa';

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
  area : AreaAdministrativa;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider, private eventoService: EventoServiceProvider) {
    this.area = navParams.get("area");
    this.eventos = new Array(0);
  }

  ionViewDidLoad() {
    this.usuario = this.userService.retornarUsuario();
    this.listarEventos();
  }

  listarEventos(){
    if(this.area==null){
    this.eventoService.listarEventos().subscribe(
      data =>{
        console.log('Data:'+ data.length);
        console.log(JSON.parse(data));
        let eventosResponse = JSON.parse(data);
        if(eventosResponse.length>0){
          for(var i=0; i < eventosResponse.length; i++){
            var ev = new Event();
            ev.eventoFromJSON(eventosResponse[i]);
            this.adicionarEventoLista(ev);
          }
          console.log('lengthok');
        }else{
          console.log('0');
        }
      },
      err => {
        console.log('erroooooooooooo');
        console.log(err);
      },
      () => console.log('Completou Requisição'));
      console.log('ionViewDidLoad EventListPage');
    }else{
      this.eventoService.listarEventosArea(this.area.id).subscribe(
        data =>{
          console.log('Data:'+ data.length);
          console.log(JSON.parse(data));
          let eventosResponse = JSON.parse(data);
          if(eventosResponse.length>0){
            for(var i=0; i < eventosResponse.length; i++){
              var ev = new Event();
              ev.eventoFromJSON(eventosResponse[i]);
              this.adicionarEventoLista(ev);
            }
            console.log('lengthok');
          }else{
            console.log('0');
          }
        },
        err => {
          console.log('erroooooooooooo');
          console.log(err);
        },
        () => console.log('Completou Requisição'));
        console.log('ionViewDidLoad EventListPage');
      }
  }

  newEvent(){
    this.navCtrl.push(EventNewPage);
  }
  adicionarEventoLista(evento: Event){
    //console.log(evento);
    if(this.eventos == null){
      this.eventos = new Array(0);
    }
    this.eventos.push(evento);
    console.log(this.eventos);
  }
  eventDetail(event: Event){
    //var detailPage : EventDetailPage;
    this.navCtrl.push(EventDetailPage, {evento: event});
    //EventDetailPage.setEvent(event.nome);
  }
}
