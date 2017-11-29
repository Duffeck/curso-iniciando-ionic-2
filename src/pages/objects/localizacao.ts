import { Usuario } from './usuario';

export class Localizacao {
  public latitude : number;
  public longitude : number;
  public usuario: Usuario;

  constructor(){
    this.usuario = null;
  }

  localizacaoFromJSON(loc: any){
    this.latitude = loc.Latitude;
    this.longitude = loc.Longitude;
    if(loc.Usuario!=''){
      var user:Usuario = new Usuario();
      user.usuarioFromJSON(loc.Usuario);
      this.usuario = user;
    }
  }
}
