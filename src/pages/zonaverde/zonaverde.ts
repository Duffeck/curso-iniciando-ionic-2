import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { ZonaVerde } from '../objects/zonaverde';
import { ZonaverdeProvider } from '../../providers/zonaverde/zonaverde';
import { Geolocation } from '@ionic-native/geolocation';
import { DomSanitizer } from '@angular/platform-browser';

import {Localizacao } from '../objects/localizacao';

/**
* Generated class for the ZonaverdePage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-zonaverde',
  templateUrl: 'zonaverde.html',
})
export class ZonaVerdePage {
  zonaForm : ZonaVerde;
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(public navCtrl: NavController, public navParams: NavParams, private zonaVerdeService : ZonaverdeProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer, private googleMaps: GoogleMaps, private geolocation: Geolocation) {
    this.zonaForm = new ZonaVerde();
    this.zonaForm.localizacao = new Localizacao();
    this.loadMap();
  }

  cancelarZonaVerde(){
    this.navCtrl.pop();
  }

  ionViewWillLeave(){
    this.destroyMap();
  }

  salvarZonaVerde(zonaForm){
    this.zonaVerdeService.cadastrarZonaVerde(zonaForm).subscribe(
      data => {
      },
      err => {
      }
    );
    this.navCtrl.pop();
  }

  destroyMap(){
    if(this.map != null){
      this.map.clear();
      this.map.remove().then(
        (data) => {
        }
      ).catch(
        (err) => {
        }
      );
    }
  }

  ionViewDidLoad() {
  }


  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      this.zonaForm.localizacao.latitude = lat;
      this.zonaForm.localizacao.longitude = lon;
      this.criarMapa(lat, lon)
    },err=>{
      this.zonaForm.localizacao.latitude = -25.451394;
      this.zonaForm.localizacao.longitude = -49.251168;
      this.criarMapa(-25.451394, -49.251168);
    });
  }

  criarMapa(lat, lon){
    this.mapElement = document.getElementById('mapzona');
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

      this.map.on(GoogleMapsEvent.MAP_CLICK)
      .subscribe(
        data => {
          //this.map.clear();
          this.zonaForm.localizacao.latitude = data.lat;
          this.zonaForm.localizacao.longitude = data.lon;
          this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: data.lat,
              lng: data.lon
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });
          });
        },
        err => {
        },
        () => {
        })

      });
    }
  }
