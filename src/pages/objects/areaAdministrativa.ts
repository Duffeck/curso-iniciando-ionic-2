export class AreaAdministrativa {
  public id : number;
  public descricao: String;
  public nome: String;

  areaFromJSON(ar : any){
    this.descricao = ar.descricao;
    this.nome = ar.nome;
    console.log(this);
  }
}
