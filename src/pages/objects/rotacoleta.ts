import { AreaAdministrativa } from "../objects/areaAdministrativa";

export class RotaColeta {
  public id : number;
  public areaId : number;
  public nome : string;
  public status : boolean;
  public area : AreaAdministrativa;
  public status_ : string;

  constructor(){
    this.area = new AreaAdministrativa();
  }

  rotaFromJSON(rc: any){
    this.id = rc.Id;
    this.areaId = rc.AreaId;
    this.nome = rc.Nome;
    this.status = rc.Status;
    this.area = rc.Area;
    console.log(this);
  }
}
