import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventListPage} from '../event-list/event-list'
import { Event } from '../objects/event'
import { EventResource} from '../objects/eventResource'
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
  eventForm = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  cancelarEvent(){
    this.navCtrl.pop();
  }

  salvarEvent(eventForm){
    var event = new Event();
    event.nome = eventForm.nome;
    console.log(event.nome);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventNewPage');
  }

}
