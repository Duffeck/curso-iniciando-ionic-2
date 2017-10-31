import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { PontoDescarte } from '../objects/pontodescarte';
import { PontosDescarteProvider } from '../../providers/pontosdescarte/pontosdescarte';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the PontosdescarteNewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pontosdescarte-new',
  templateUrl: 'pontosdescarte-new.html',
})
export class PontosDescartePage {
  pontoForm : PontoDescarte;
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pontoDescarteService : PontosDescarteProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer, private googleMaps: GoogleMaps, private geolocation: Geolocation) {
    this.pontoForm = new PontoDescarte();
    this.loadMap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PontosdescarteNewPage');
  }

  ionViewWillLeave(){
    this.destroyMap();
    console.log('will leave');

  }

  cancelarPonto(){
    this.navCtrl.pop();
  }

  salvarPonto(pontoForm){
    console.log(pontoForm.ehParticular);
    this.pontoDescarteService.cadastrarPontoDescarte(pontoForm).subscribe(
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

  destroyMap(){
    if(this.map != null){
      this.map.clear();
      this.map.remove().then(
          (data) => {
            console.log('mapa destruído');
            console.log(data);
          }
      ).catch(
        (err) => {
          console.log('erro destruir');
          console.log(err);
        }
      );
    }
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      console.log(position);
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      this.pontoForm.localizacao.latitude = lat;
      this.pontoForm.localizacao.longitude = lon;
      this.criarMapa(lat, lon)
    },err=>{
      this.criarMapa(-25.451394, -49.251168);
    });
  }

  criarMapa(lat, lon){
    this.mapElement = document.getElementById('mapponto');
    console.log(this.mapElement);
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: lon
        },
        zoom: 16,
        tilt: 15
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    this.map.setDiv(this.mapElement);
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        console.log(this.map);
        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: lat,
              lng: lon
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }
}
