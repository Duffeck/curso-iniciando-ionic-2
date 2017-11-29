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
    var cat = new Categoria();
    this.categoria = cat.categoriaFromJSON(resid.Categoria);
    if(resid.Fotos != null){
      this.fotos = new Array();
      for(var i = 0; i < resid.Fotos.length; i ++){
        var foto:Foto = new Foto();
        foto.fotoFromJSON(resid.Fotos[i]);
        this.fotos.push(foto);
      }
    }
    this.descricao = resid.Descricao;
    this.estado = resid.Estado;
    this.observacao = resid.Observacao;
  }
}
