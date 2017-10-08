import { Origem } from './origem.ts';
import { Periculosidade } from './periculosidade.ts';
import { ComposicaoQuimica } from './composicaoQuimica.ts';
import { Tipo } from './tipo.ts';

export class Categoria{
  nome: string;
  descricao: string;
  codGrafico: string;
  cor: string;
  tiposCategorias: [{categoria: string}];
  constructor(){
    this.tiposCategorias = [
      {categoria: 'origem'},
      {categoria: 'tipo'},
      {categoria: 'composicao'},
      {categoria: 'periculosidade'}
    ]
  }

  componenteCategoriaFromJSON(componente: any, tipo: string){
    //console.log(componente);
    var comp;
    switch(tipo){
      case 'origem':
        comp = new Origem();
        break;
      case 'tipo':
        comp = new Tipo();
        break;
      case 'composicao':
        comp = new ComposicaoQuimica();
        break;
      case 'periculosidade':
        comp = new Periculosidade();
        break;
    }
    if(comp!= null){
      comp.descricao = componente.Descricao;
      comp.peso = componente.Peso;
    }
    return comp;
  }
}
