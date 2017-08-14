import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventNewPage } from '../event-new/event-new';
import { EventDetailPage } from '../event-detail/event-detail';
import { Event } from '../objects/event'
import { EventResource } from '../objects/eventResource'

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*
    var evento = new Event();
    evento.nome = "Fórum Municipal Lixo Zero";
    evento.bairro = "Prado Velho";
    evento.cidade = "Curitiba";
    evento.descricao = "Coleta Comunitária de resíduos recicláveis. Venha cooperar!";
    evento.estado = "Paraná";
    evento.numero = 1551;
    evento.rua = "Rua Chile";
    evento.urlFoto = "https://www.albacora.com.br/blog/wp-content/uploads/2016/05/Capa_evento_Oficial.jpg";
    evento.data = "04/06/2017"

    this.eventos = [];
    this.eventos.push(evento);

    var evento = new Event();
    evento.nome = "Festival de Agricultura Urbana";
    evento.bairro = "Barro Preto";
    evento.cidade = "São José dos Pinhais";
    evento.descricao = "Feiras, Leilões, Palestras e Cursos voltados para a agricultura e o meio ambiente";
    evento.estado = "Paraná";
    evento.numero = 4283;
    evento.rua = "Alameda das Palmas";
    evento.urlFoto = "https://casadasustentabilidade.files.wordpress.com/2016/09/forum-municipal-lixo-zero-01.jpg?w=676";
    evento.data = "12/07/2017"

    this.eventos.push(evento);
    */
    this.eventos = EventResource.getInstance().getEventos();
  }

  ionViewDidLoad() {
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
