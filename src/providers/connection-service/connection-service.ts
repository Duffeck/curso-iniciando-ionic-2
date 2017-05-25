import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ConnectionServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectionServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ConnectionServiceProvider Provider');
  }

  getCep(cep: string): Promise<Response>{
    return this.http.get('https://viacep.com.br/ws/'+cep.trim()+'/json/').toPromise();
  }

}
