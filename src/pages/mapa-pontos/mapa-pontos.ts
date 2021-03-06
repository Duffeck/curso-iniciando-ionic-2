import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
  //CameraPosition,
  //MarkerOptions,
  //Marker
} from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Categoria } from '../objects/categoria';
import { PontosDescarteProvider } from '../../providers/pontosdescarte/pontosdescarte';
import { PontoDescarte } from '../objects/pontodescarte';
import { Localizacao } from '../objects/localizacao';

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
  pontosDescarte: Array<PontoDescarte>;
  minhaLocalizacao: Localizacao;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private geolocation: Geolocation, private pontoDescarteService : PontosDescarteProvider) {
    this.categoria = this.navParams.get('categoria');
    this.pontosDescarte = new Array<PontoDescarte>();
    this.minhaLocalizacao = new Localizacao();
  }

  ionViewWillEnter(){
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  ionViewWillLeave(){
    this.destroyMap();

  }

  listarPontos(categoriaa: Categoria){
    if(categoriaa.id){
      this.pontoDescarteService.listarPontosPorCategoria(categoriaa, this.minhaLocalizacao).subscribe(
        data => {
          var resultado = JSON.parse(data);
          if(resultado.length > 0){
            for(var cont = 0; cont < resultado.length; cont ++){
              var ponto = new PontoDescarte();
              ponto.pontoFromJSON(resultado[cont]);
              this.pontosDescarte.push(ponto);
            }
            if(this.map != null){
              for(var i=0; i < this.pontosDescarte.length; i++){
                this.map.addMarker({
                  title: this.pontosDescarte[i].estado,
                  icon: 'blue',
                  animation: 'DROP',
                  position: {
                    lat: this.pontosDescarte[i].localizacao.latitude,
                    lng: this.pontosDescarte[i].localizacao.longitude
                  }
                })
                .then(marker => {

                }).catch(err => {
                });
              }
            }else{
            }
          }
        },
        err => {
        }
      );
    }else{
    }
  }

  adicionarPontoMapa(ponto: PontoDescarte){

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

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      this.minhaLocalizacao.latitude = lat;
      this.minhaLocalizacao.longitude = lon;
      console.log('leu posicao');
      this.listarPontos(this.categoria);
      //this.criarMapa(lat, lon);
    },err=>{
      this.minhaLocalizacao.latitude = -25.450418;
      this.minhaLocalizacao.longitude = -49.251285;
      console.log('nao leu posicao');
      this.listarPontos(this.categoria);
      //this.criarMapa(-25.450418, -49.251285);
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
      this.listarPontos(this.categoria);
    });
  }

}
