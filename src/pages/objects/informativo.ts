export class Informativo {
  public titulo : string;
  public descricao : string;

  constructor() {
  }

  informativoFromJSON(informativo: any){
    this.titulo = informativo.Titulo;
    this.descricao = informativo.Descricao;
  }
}
