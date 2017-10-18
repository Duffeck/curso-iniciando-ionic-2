import { Categoria } from './categoria';
import { Usuario } from './usuario';
import { Foto } from './foto';

export class Residuo{
  nome: string;
  descricao: string;
  estado : string;
  observacao: string;
  fotos: Array<Foto>;
  categoria: Categoria;
  usuario: Usuario;

  constructor(){
      this.fotos = new Array();
  }
}
