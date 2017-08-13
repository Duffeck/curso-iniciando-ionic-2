import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { DatePipe } from '@angular/common';

import { EventListPage} from '../event-list/event-list';
import { Event } from '../objects/event';
import { EventResource} from '../objects/eventResource';
import { EstadosRadioPage } from '../estados-radio/estados-radio';
//src
/**
 * Generated class for the EventNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-new',
  templateUrl: 'event-new.html',
})
export class EventNewPage {
  eventForm : Event;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.eventForm = new Event();
  }

  cancelarEvent(){
    this.navCtrl.pop();
  }

  salvarEvent(eventForm){
    var event = new Event();
    event.nome = eventForm.nome;
    event.bairro = eventForm.bairo;
    event.cidade = eventForm.cidade;
    var datePipe = new DatePipe("pt-BR");
    event.data = datePipe.transform(eventForm.data, 'dd/MM/yyyy');
    event.descricao = eventForm.descricao;
    event.estado = eventForm.estado;
    event.numero = eventForm.numero;
    event.rua = eventForm.rua;
    event.urlFoto = eventForm.urlFoto;

    EventResource.getInstance().addEvento(event);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventNewPage');
  }

  openListEstados(){
    let popover = this.popoverCtrl.create(EstadosRadioPage);
    popover.onDidDismiss(data => {
     this.eventForm.estado = data;
   });
    popover.present();
  }

  setEstado(uf: string){

  }
}
