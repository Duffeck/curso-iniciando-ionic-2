import { Usuario } from './usuario';

export class Localizacao {
  public latitude : number;
  public longitude : number;
  public usuario: Usuario;
  public dataCriacao: string;

  constructor(){
    this.usuario = null;
  }

  localizacaoFromJSON(loc: any){
    this.latitude = loc.Latitude;
    this.longitude = loc.Longitude;
    if(loc.Usuario!=null){
      var user:Usuario = new Usuario();
      user.usuarioFromJSON(loc.Usuario);
      this.usuario = user;
    }
    //this.dataCriacao = new Date(loc.DataCriacao).toISOString();
    this.dataCriacao = loc.DataCriacao;
  }
}
