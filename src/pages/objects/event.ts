import { Periodo } from './periodo.ts';
import { DatePipe } from '@angular/common';

export class Event {
  public id: number;
  public nome : string;
  public descricao : string;
  public cidade  : string;
  public estado : string;
  public bairro : string;
  public rua : string;
  public urlFoto : any;
  public numero : number;
  public data : string;
  public periodos : Array<any>;
  public uriFoto: string;

  constructor() {
    this.periodos = new Array(0);
  }

  eventoFromJSON(ev: any){
    this.id = ev.Id;
    this.nome = ev.Nome;
    this.descricao = ev.Descricao;
    this.cidade = ev.Cidade;
    this.estado = ev.Estado;
    this.bairro = ev.Bairro;
    this.rua = ev.Rua;
    this.urlFoto = ev.URLFoto;
    this.numero = ev.Numero;
    if(ev.Periodos.length > 0){
      for(let per of ev.Periodos){
        var periodo = new Periodo();
        periodo.periodoFromJSON(per);
        this.periodos.push(periodo);
      }
      var datePipe = new DatePipe("pt-BR");
      this.data = datePipe.transform(this.periodos[0].horarioFinal, 'dd/MM/yyyy');
    }
  }
}
