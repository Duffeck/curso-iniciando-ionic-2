import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventNewPage } from '../event-new/event-new';
import { EventDetailPage } from '../event-detail/event-detail';
import { Event } from '../objects/event';
//import { EventResource } from '../objects/eventResource';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider, private eventoService: EventoServiceProvider) {
    console.log('iniciou requisição');
    this.eventoService.listarEventos(0).subscribe(
      data =>{
        console.log(data);
      },
      err => {
        console.log('erroooooooooooo');
        console.log(err);
      },
      () => console.log('Completou Requisição'));
  }

  ionViewDidLoad() {
    let user = this.userService.retornarUsuario();
    console.log(user);
    console.log('feito');
    console.log('ionViewDidLoad EventListPage');
  }

  newEvent(){
    this.navCtrl.push(EventNewPage);
  }

  eventDetail(event: Event){
    //var detailPage : EventDetailPage;
    this.navCtrl.push(EventDetailPage, {evento: event});
    //EventDetailPage.setEvent(event.nome);
  }
}
