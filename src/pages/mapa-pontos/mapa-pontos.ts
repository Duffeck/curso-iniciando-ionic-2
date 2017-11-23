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
import { Categoria } from '../objects/categoria';
import { PontosDescarteProvider } from '../../providers/pontosdescarte/pontosdescarte';

/**
* Generated class for the MapaPontosPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-mapa-pontos',
  templateUrl: 'mapa-pontos.html',
})
export class MapaPontosPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  categoria: Categoria;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private geolocation: Geolocation, private pontoDescarteService : PontosDescarteProvider) {
    this.categoria = this.navParams.get('categoria');
    console.log(this.categoria);
    this.listarPontos(this.categoria);
  }

  ionViewWillEnter(){
    //this.categoria = this.navParams.get('categoria');
    //console.log(this.categoria );
  }
  ionViewDidLoad() {
    //this.loadMap();
    console.log('ionViewDidLoad MapaPontosPage');
  }

  ionViewWillLeave(){
    this.destroyMap();
    console.log('will leave');

  }

  listarPontos(categoriaa: Categoria){
    console.log(this.categoria);
    console.log(categoriaa.id);
    if(categoriaa.id){
      this.pontoDescarteService.listarPontosPorCategoria(categoriaa).subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log("Listou (ou não) os pontos")
      );
    }else{
      console.log('erro ao identificar categoria');
    }
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
    this.mapElement = document.getElementById('mapcategoria');
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
