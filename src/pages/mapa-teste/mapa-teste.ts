import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConectivityServiceProvider } from '../../providers/conectivity-service/conectivity-service';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;
/**
* Generated class for the MapaTestePage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-mapa-teste',
  templateUrl: 'mapa-teste.html',
})
export class MapaTestePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapInitialised: boolean = false;
  apiKey: any = 'AIzaSyAsO93HAb311YtiTXrjuyiVbbzTbRUGNsk';

  constructor(public navCtrl: NavController, public navParams: NavParams, public connectivityService: ConectivityServiceProvider, private geolocation: Geolocation) {
    this.loadGoogleMaps();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaTestePage');
  }

  loadGoogleMaps(){

    this.addConnectivityListeners();

    if(typeof google == "undefined" || typeof google.maps == "undefined"){

      console.log("Google maps JavaScript needs to be loaded.");
      this.disableMap();

      if(this.connectivityService.isOnline()){
        console.log("online, loading map");

        //Load the SDK
        window['mapInit'] = () => {
          this.initMap();
          this.enableMap();
        }

        let script = document.createElement("script");
        script.id = "googleMaps";

        if(this.apiKey){
          script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
        } else {
          script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
        }

        document.body.appendChild(script);

      }
    } else {
      if(this.connectivityService.isOnline()){
        console.log("showing map");
        this.initMap();
        this.enableMap();
      }
      else {
        console.log("disabling map");
        this.disableMap();
      }

    }

  }

  initMap(){
    this.mapInitialised = true;
    this.geolocation.getCurrentPosition().then((position) => {
      console.log(position);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      var marker = new google.maps.Marker({
          position: latLng,
          map: this.map
        });
    },
    err => {
      console.log(err);
    });

  }

  disableMap(){
    console.log("disable map");
  }

  enableMap(){
    console.log("enable map");
  }

  addConnectivityListeners(){
    let onOnline = () => {
      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
          this.loadGoogleMaps();
        } else {

          if(!this.mapInitialised){
            this.initMap();
          }
          this.enableMap();
        }
      }, 2000);

    };

    let onOffline = () => {
      this.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);

  }

  addMarker(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.map.addMarker({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        /*position: {
          lat: 43.0741904,
          lng: -89.3809802
        }*/
        position: latLng
      })
      .then(marker => {
        console.log(marker);
      });
    },err=>{
      console.log(err);
    });
  }
}
