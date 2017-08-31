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
      {categoria: 'composição química'},
      {categoria: 'periculosidade'}
    ]
  }
}
