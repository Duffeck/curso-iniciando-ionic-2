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
            console.log('Resposta');
            console.log(data);
          },
          err => {
            console.log('Erro');
            console.log(err);
          },
          () => console.log('Completou Requisição')
      );
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventNewPage');
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
        this.base64.encodeFile(results[0]).then((base64File: string) => {
          this.inserirURIImagem(base64File);
        }, (err) => {
          console.log(err);
        });
      }else{
        console.log('nao');
      }
    },
    (err) => {
      console.log(err);
    });
  }

  inserirURIImagem(uri: string){
    this.eventForm.urlFoto =uri;
  }

  selecionarData(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
