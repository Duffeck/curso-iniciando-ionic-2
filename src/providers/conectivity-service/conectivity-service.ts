import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';


declare var Connection;

@Injectable()
export class ConectivityServiceProvider {

  onDevice: boolean;

  constructor(public http: Http, public platform: Platform, public network: Network) {
    this.onDevice = this.platform.is('cordova');
    console.log('Hello ConectivityServiceProvider Provider');
  }

  isOnline(): boolean {
    if(this.onDevice && this.network.type){
      return this.network.type !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }

  isOffline(): boolean {
    if(this.onDevice && this.network.type){
      return this.network.type === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }

}
