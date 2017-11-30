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


  constructor(){
    this.localizacao = new Localizacao();
  }

  pontoFromJSON(pd: any){
    this.id = pd.Id;
    this.estado = pd.Estado;
    this.ehParticular = pd.EhPArticular;
    this.alerta = pd.Alerta;
    var loc = new Localizacao();
    loc.localizacaoFromJSON(pd.Localizacao);
    this.localizacao = loc;
    if(pd.Categoria != undefined){
      var cat = new Categoria();
      this.categoria = cat.categoriaFromJSON(pd.Categoria);
    }
  }
}
