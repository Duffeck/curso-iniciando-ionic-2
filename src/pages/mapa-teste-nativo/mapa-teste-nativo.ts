import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions
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

  ionViewWillLeave(){
    this.destroyMap();
    console.log('will leave');

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
      this.criarMapa(lat, lon)
    },err=>{
      this.criarMapa(-25.451394, -49.251168);
    });
  }

  criarMapa(lat, lon){
    this.mapElement = document.getElementById('maptestenativo');
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
    console.log('mapaaaaaaaaaaaaaaa');
    console.log(this.map);
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
            icon: 'green',
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
          this.map.addMarker({
              title: 'Ionic',
              icon: 'red',
              animation: 'DROP',
              position: {
                lat: -25.449456,
                lng: -49.252133
              }
            }).then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe(() => {
                  alert('clicked');
                });
            });
            this.map.addMarker({
                title: 'Ionic',
                icon: 'red',
                animation: 'DROP',
                position: {
                  lat: -25.451150,
                  lng: -49.251999
                }
              }).then(marker => {
                marker.on(GoogleMapsEvent.MARKER_CLICK)
                  .subscribe(() => {
                    alert('clicked');
                  });
              });
      });
  }
}
