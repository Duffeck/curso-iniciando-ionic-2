export class Event {
  public nome : string;
  public descricao : string;
  public cidade  : string;
  public estado : string;
  public bairro : string;
  public rua : string;
  public urlFoto : any;
  public numero : number;
  public data : string;

  constructor() {
  }

}

export interface Event{
  nome : string;
  descricao : string;
  cidade  : string;
  estado : string;
  bairro : string;
  rua : string;
  urlFoto : any;
  numero : number;
  data : string;
}
