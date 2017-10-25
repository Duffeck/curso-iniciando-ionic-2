import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the MapaTesteNativoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mapa-teste-nativo',
  templateUrl: 'mapa-teste-nativo.html',
})
export class MapaTesteNativoPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private geolocation: Geolocation) {
    //this.loadMap();
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad MapaTesteNativoPage');
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      console.log(position);
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      this.criarMapa(lat, lon)
    },err=>{
      console.log(err);
      this.criarMapa(-25.451394, -49.251168);
    });
  }

  criarMapa(lat, lon){
    this.mapElement = document.getElementById('map');
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
