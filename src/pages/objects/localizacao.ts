export class Localizacao {
  public latitude : number;
  public longitude : number;

  constructor(){

  }

  localizacaoFromJSON(loc: any){
    this.latitude = loc.Latitude;
    this.longitude = loc.Longitude;
  }
}
