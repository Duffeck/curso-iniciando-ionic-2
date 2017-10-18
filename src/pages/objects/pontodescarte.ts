import { Alerta } from '../objects/alerta';
import { Localizacao } from '../objects/localizacao';
import { Categoria } from '../objects/categoria';

export class PontoDescarte {
  public id : number;
  public estado : string;
  public ehParticular : boolean;
  public alerta : Alerta;
  public localizacao : Localizacao;
  public categoria : Categoria;

  pontoFromJSON(pd: any){
    this.id = pd.Id;
    this.estado = pd.Estado;
    this.ehParticular = pd.EhPArticular;
    this.alerta = pd.Alerta;
    this.localizacao = pd.Localizacao;
    this.categoria = pd.Categoria;
    console.log(this);
  }
}
