import { RequestOptions, Headers } from '@angular/http';

export class Config{

  //static url:string = "http://localhost:58861/";
  //static fileServer:string = "http://localhost:55869/";
  //static url:string = "http://192.168.42.113:45455/";
  //static url:string = "http://192.168.42.141:45455/";
  //static fileServer:string = "http://192.168.42.141:55869/";
  //static fileServer:string = "http://192.168.42.113:55869/";
  //static url:string = "http://192.168.0.19:45455/";
  //static fileServer:string = "http://192.168.0.19:55869/";
  static url:string = "http://192.168.137.1:45455/";
  static fileServer:string = "http://192.168.137.1:55869/";

static postOptionsHeader(){
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  var options : RequestOptions;
  options = new RequestOptions({method: 'post', headers: headers});
  return options;
  }
}
