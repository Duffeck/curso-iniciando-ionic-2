import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

import { Event } from '../objects/event';
import { EstadosRadioPage } from '../estados-radio/estados-radio';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePicker } from '@ionic-native/date-picker';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private imagePicker: ImagePicker, private eventoService : EventoServiceProvider, private base64: Base64, private _sanitizer: DomSanitizer, private datePicker: DatePicker) {
    this.eventForm = new Event();
  }

  cancelarEvent(){
    this.navCtrl.pop();
  }

  salvarEvent(eventForm){
    this.eventoService.cadastrarEvento(eventForm).subscribe(
          data => {
            if(data > 0){
              eventForm.id = data;
              this.eventoService.transferirArquivo(eventForm);
            }
          },
          err => {
          }
      );
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
  }

  openListEstados(){
    let popover = this.modalCtrl.create(EstadosRadioPage);
    popover.onDidDismiss(data => {
     this.eventForm.estado = data;
   });
    popover.present();
  }

  setEstado(uf: string){

  }

  abrirImagem(){
    if(!this.imagePicker.hasReadPermission()){
      this.imagePicker.requestReadPermission();
    }
    this.imagePicker.getPictures({maximumImagesCount: 1}).then((results) => {
      if(results.length > 0){
        this.eventForm.uriFoto = results[0];
        this.base64.encodeFile(results[0]).then((base64File: string) => {
          this.eventForm.urlFoto = (base64File);
        }, (err) => {
        });
      }else{
      }
    },
    (err) => {
    });
  }

  selecionarData(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {},
      err => {}
    );
  }
}
