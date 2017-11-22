import { Categoria } from './categoria';
import { Usuario } from './usuario';
import { Foto } from './foto';

export class Residuo{
  id: number;
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

  residuoFromJSON(resid: any){
    this.id = resid.Id;
    this.nome = resid.Nome;
    this.categoria = resid.Categoria;
    //this.fotos;
    this.descricao = resid.Descricao;
    this.estado = resid.Estado;
    this.observacao = resid.Observacao;
  }
}
