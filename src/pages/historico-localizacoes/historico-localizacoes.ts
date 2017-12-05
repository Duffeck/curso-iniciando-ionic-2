import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Usuario } from '../objects/usuario';
import { Localizacao } from '../objects/localizacao';

/**
* Generated class for the HistoricoLocalizacoesPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-historico-localizacoes',
  templateUrl: 'historico-localizacoes.html',
})
export class HistoricoLocalizacoesPage {
  user: Usuario;
  localizacoes: Array<Localizacao>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider) {
    this.user = navParams.get('user');
    this.localizacoes = new Array<Localizacao>();
    if(this.user){
      this.listarLocalizacoes();
    }
  }

  listarLocalizacoes(){
    console.log('não deveria chegar aqui');
    this.userService.listarLocalizacoes(this.user).subscribe(
      data=>{
        console.log(data);
        if(data.length > 0){
          var retorno = JSON.parse(data);
          for(var i = 0; i < retorno.length; i ++){
            var localizacao = new Localizacao();
            localizacao.localizacaoFromJSON(retorno[i]);
            this.localizacoes.push(localizacao);
          }
          console.log(this.localizacoes);
        }
      },err=>{

      },
      () => console.log('completou')
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoLocalizacoesPage');
  }

}
