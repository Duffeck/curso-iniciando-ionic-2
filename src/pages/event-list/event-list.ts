import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectionServiceProvider } from '../../providers/connection-service/connection-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private connectionService: ConnectionServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

  buscarCEP(): void{
    this.connectionService.getCep('83010120').then(
      (res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  }
}
