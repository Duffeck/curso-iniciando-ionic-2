import { Localizacao } from '../objects/localizacao';

export class ZonaVerde {
  public nome : string;
  public descricao : string;
  public localizacao : Localizacao;

  zonaFromJSON(zn: any){
    this.nome = zn.Nome;
    this.descricao = zn.Descricao;
    this.localizacao = zn.localizacao;
    console.log(this);
  }
}
