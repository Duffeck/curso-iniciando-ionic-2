export class Periodo{
  public horarioInicial: string;
  public horarioFinal: string;
  constructor(){

  }

  periodoFromJSON(per: any){
    this.horarioInicial = per.HorarioInicial;
    this.horarioFinal = per.HorarioFinal;
  }
}
