import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { PontoDescarte } from '../objects/pontodescarte';
import { PontosDescarteProvider } from '../../providers/pontosdescarte/pontosdescarte';

import { DomSanitizer } from '@angular/platform-browser';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Localizacao } from '../objects/localizacao';
import { Categoria } from '../objects/categoria';
import { CategoriaServiceProvider } from '../../providers/categoria-service/categoria-service';
import { UserProvider } from '../../providers/user/user';
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
  listaCategorias : Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pontoDescarteService : PontosDescarteProvider, public popoverCtrl: PopoverController, private _sanitizer: DomSanitizer, private googleMaps: GoogleMaps, private geolocation: Geolocation, private categoriaService: CategoriaServiceProvider, private userService: UserProvider) {
    this.pontoForm = new PontoDescarte();
    this.pontoForm.categoria = new Categoria();
    this.listaCategorias = new Array<Categoria>();
    this.loadMap();
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.listarCategorias();
  }

  ionViewWillLeave(){
    this.destroyMap();
  }

  cancelarPonto(){
    this.navCtrl.pop();
  }

  salvarPonto(pontoForm){
    this.pontoDescarteService.cadastrarPontoDescarte(pontoForm).subscribe(
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

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      this.pontoForm.localizacao.latitude = lat;
      this.pontoForm.localizacao.longitude = lon;
      this.userService.salvarLocalizacaoUsuario(this.pontoForm.localizacao).subscribe(
        data=>{

        },
        err=>{

        },
        () => console.log('completou requisição')
      );
      this.criarMapa(lat, lon)
    },err=>{
      var loc = new Localizacao();
      loc.latitude = -25.451394;
      loc.longitude = -49.251168;
      this.userService.salvarLocalizacaoUsuario(loc).subscribe(
        data=>{
        },
        err=>{
        },
        () => console.log('completou requisição')
      );
      this.criarMapa(-25.451394, -49.251168);
    });
  }

  criarMapa(lat, lon){
    this.mapElement = document.getElementById('mapponto');
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

    });
  }

  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe(
      data=>{
        var resposta = JSON.parse(data);
        if(resposta.length > 0){
          for(var i = 0; i < resposta.length; i ++){
            var categoria = new Categoria();
            this.listaCategorias.push(categoria.categoriaFromJSON(resposta[i]));
          }
        }
      },
      err=>{
      });
    }
  }
