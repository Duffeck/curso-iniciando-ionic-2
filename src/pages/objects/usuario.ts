import { Localizacao } from './localizacao';

export class Usuario {
  public id : number;
  public nome : string;
  public email : string;
  public senha  : string;
  public pontos : string;
  public raioBusca : number;
  public ehAdministrador : boolean;
  public localizacoes: Array<Localizacao>;

  constructor() {
    this.localizacoes = new Array<Localizacao>();
  }

  usuarioFromJSON(user: any){
    this.id = user.Id;
    this.nome = user.Nome;
    this.email = user.Email;
    this.senha = user.Senha;
    this.pontos = user.Pontos;
    this.raioBusca = user.RaioBusca;
    this.ehAdministrador = user.EhAdministrador;
  }
}
