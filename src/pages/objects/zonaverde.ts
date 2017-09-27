export class ZonaVerde {
  public nome : string;
  public descricao : string;

  eventoFromJSON(zn: any){
    this.nome = zn.Nome;
    this.descricao = zn.Descricao;

    console.log(this);
  }
}
