import { Origem } from './origem.ts';
import { Periculosidade } from './periculosidade.ts';
import { ComposicaoQuimica } from './composicaoQuimica.ts';
import { Tipo } from './tipo.ts';

export class Categoria{
  id: number;
  nome: string;
  descricao: string;
  codGrafico: string;
  cor: string;
  tiposCategorias: any;
  cores: Array<string>;
  coresIngles: any;
  origens: Array<any>;
  periculosidades: Array<any>;
  composicoesQuimicas: Array<any>;
  tipos: Array<any>;

  constructor(){
    this.tiposCategorias = {
      'origem': {},
      'tipo': {},
      'composicao': {},
      'periculosidade': {}
    }

    //this.cores = ['#FFFF00','#FF0000','#008000','#000000','#FFA500','#FFFFFF','#A0522D','#800080','#0000FF']
    //this.cores = ['amarelo','vermelho','verde','preto','laranjado','branco','marrom','roxo','azul'];
    this.cores = ['Amarelo','Vermelho','Verde','Preto','Laranjado','Branco','Marrom','Roxo','Azul'];
    this.coresIngles = {'Amarelo':'yellow','Vermelho':'red','Verde':'green','Preto':'black','Laranjado':'orange','Branco':'white','Marrom':'brown','Roxo':'purple','Azul':'blue'};
    /*
    this.cores = [
      'Amarelo': '#FFFF00',
      'Vermelho': '#FF0000',
      'Verde': '#008000',
      'Preto': '#000000',
      'Laranjado': '#FFA500',
      'Branco': '#FFFFFF',
      'Marrom': '#A0522D',
      'Roxo': '#800080',
      'Azul': '#0000FF'
    ]
    */

    this.origens = new Array();
    this.periculosidades = new Array();
    this.composicoesQuimicas = new Array();
    this.tipos = new Array();
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
      comp.id = componente.Id;
      comp.descricao = componente.Descricao;
      comp.peso = componente.Peso;
    }
    return comp;
  }

  categoriaFromJSON(categoria: any){
    this.codGrafico = categoria.CodGrafico;
    this.id = categoria.Id;
    //this.composicoesQuimicas
    this.cor = categoria.Cor;
    this.descricao = categoria.Descricao;
    this.nome = categoria.Nome;
    //this.origens
    //this.periculosidades
    //this.tipos
    return this;
  }
/*
  static listarCategorias(){
    var lista = new Array<Categoria>();
    var categoria = new Categoria();
    categoria.cor = "Vermelho";
    categoria.nome = "Plástico";
    categoria.descricao = "Pástico Simples";
    categoria.id = 1;
    lista.push(categoria);
    var categoria = new Categoria();
    categoria.cor = "Amarelo";
    categoria.nome = "Metal";
    categoria.descricao = "Metal Simples";
    categoria.id = 2;
    lista.push(categoria);
    var categoria = new Categoria();
    categoria.cor = "Azul";
    categoria.nome = "Papel";
    categoria.descricao = "Papel Simples";
    categoria.id = 3;
    lista.push(categoria);
    return lista;
  }
  */
}
