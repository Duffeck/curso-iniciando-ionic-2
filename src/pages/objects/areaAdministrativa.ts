export class AreaAdministrativa {
  public id : number;
  public descricao: String;
  public nome: String;

  constructor(){

  }

  areaFromJSON(ar : any){
    this.id = ar.Id;
    this.descricao = ar.Descricao;
    this.nome = ar.Nome;
    console.log(this);
  }
}
