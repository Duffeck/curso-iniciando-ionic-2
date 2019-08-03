import { PontoDescarte } from '../objects/pontodescarte';

export class Alerta {
  public id : number;
  public pontoId : number;
  public descricao: String;
  public horario : Date;
  public ponto : PontoDescarte;

  alertaFromJSON(al : any){
    this.id = al.Id;
    this.pontoId = al.PontoDescarteId;
    this.descricao = al.Descricao;
    this.horario = new Date(al.DataCriacao);
    this.ponto = al.PontoDescarte;
    console.log(this);
  }
}
