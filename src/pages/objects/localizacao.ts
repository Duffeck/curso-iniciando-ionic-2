export class Localizacao {
  public id : number;
  public latitude : number;
  public longitude : number;

  constructor(){
  }

  localizacaoFromJSON(lc: any){
    this.id = lc.Id;
    this.latitude = lc.Latitude;
    this.longitude = lc.Longitude;
    console.log(this);
  }
}
