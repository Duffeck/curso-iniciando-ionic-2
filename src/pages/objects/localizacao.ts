export class Localizacao {
  public id : number;
  public latitude : string;
  public longitude : string;

  constructor(){
  }

  localizacaoFromJSON(lc: any){
    this.id = lc.Id;
    this.latitude = lc.Latitude;
    this.longitude = lc.Longitude;
    console.log(this);
  }
}
