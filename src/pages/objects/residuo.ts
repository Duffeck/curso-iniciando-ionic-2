import { Categoria } from './categoria';
import { Usuario } from './usuario';

export class Residuo{
  nome: string;
  descricao: string;
  estado : string;
  observacao: string;
  fotos: Array<any>;
  categoria: Categoria;
  usuario: Usuario;
}
