import { Event } from './event'

export class EventResource {
  private eventos =[];
  private static eventResource : EventResource;

  private constructor() {
    var evento = new Event();
    evento.nome = "Fórum Municipal Lixo Zero";
    evento.bairro = "Prado Velho";
    evento.cidade = "Curitiba";
    evento.descricao = "Coleta Comunitária de resíduos recicláveis. Venha cooperar!";
    evento.estado = "Paraná";
    evento.numero = 1551;
    evento.rua = "Rua Chile";
    evento.urlFoto = "https://casadasustentabilidade.files.wordpress.com/2016/09/forum-municipal-lixo-zero-01.jpg?w=676";
    evento.data = "04/06/2017"

    this.eventos = [];
    this.eventos.push(evento);

    var evento = new Event();
    evento.nome = "Festival de Agricultura Urbana";
    evento.bairro = "Barro Preto";
    evento.cidade = "São José dos Pinhais";
    evento.descricao = "Feiras, Leilões, Palestras e Cursos voltados para a agricultura e o meio ambiente";
    evento.estado = "Paraná";
    evento.numero = 4283;
    evento.rua = "Alameda das Palmas";
    evento.urlFoto = "https://www.albacora.com.br/blog/wp-content/uploads/2016/05/Capa_evento_Oficial.jpg";
    evento.data = "12/07/2017"

    this.eventos.push(evento);
  }

  public static getInstance(){
    if (this.eventResource == null){
      this.eventResource = new EventResource();
    }
    return this.eventResource;
  }

  public getEventos(){
    return this.eventos;
  }

  public addEvento(evento : Event){
    this.eventos.push(evento);
  }
}
