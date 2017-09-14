export class Usuario {
  public nome : string;
  public email : string;
  public senha  : string;
  public pontos : string;
  public raioBusca : number;
  public ehAdministrador : boolean;

  constructor() {
  }

  usuarioFromJSON(user: any){
    this.nome = user.Nome;
    this.email = user.Email;
    this.senha = user.Senha;
    this.pontos = user.Pontos;
    this.raioBusca = user.RaioBusca;
    this.ehAdministrador = user.EhAdministrador;
    console.log('this');
    console.log(this);
  }
}
