import { Usuario } from './usuario.ts';
import { Foto } from './foto.ts';
import { Event } from './event.ts';

export class Denuncia {
  public id: number;
  public descricao: string;
  public estado: string;
  public usuario: any;
  public foto: any;
  public evento: Event;

  constructor() {
  }

  eventoFromJSON(den: any){
    this.id = den.Id;
    this.descricao = den.Descricao;
    this.estado = den.Estado;
    if(den.Evento){
      var evento_aux = new Event();
      this.evento = evento_aux.eventoFromJSON(den.Evento);
    }
    if(den.Usuario){
      var usuario_aux = new Usuario();
      this.usuario = usuario_aux.usuarioFromJSON(den.Usuario);
    }
    if(den.Foto){
      var foto_aux = new Foto();
      this.foto = foto_aux.fotoFromJSON(den.Foto);
    }
  }
}
