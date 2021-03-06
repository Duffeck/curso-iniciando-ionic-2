import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ResiduosPage } from '../pages/residuos/residuos';
import { InformativoListPage } from '../pages/informativo-list/informativo-list'
import { Usuario } from '../pages/objects/usuario';
import { UserProvider } from '../providers/user/user';
import { ZonaVerdeListPage } from '../pages/zonaverde-list/zonaverde-list';
import { PontosDescarteListPage } from '../pages/pontosdescarte-list/pontosdescarte-list';
//import { AlertaListPage } from '../pages/alerta-list/alerta-list';
//import { MapaTesteNativoPage } from '../pages/mapa-teste-nativo/mapa-teste-nativo';
import { CategoriaListPage } from '../pages/categoria-list/categoria-list';
import { AreaAdministrativaListPage } from '../pages/areaadministrativa-list/areaadministrativa-list';
import { DenunciaListPage } from '../pages/denuncia-list/denuncia-list';
import { HistoricoLocalizacoesPage } from '../pages/historico-localizacoes/historico-localizacoes';
import { ProfilePage } from '../pages/profile/profile';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages : Array<{component: any, title: string, icon: string}>;
  rootPage:any = HomePage;
  loginPage: {component: any, title: string, icon: string};
  user : Usuario;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private userService: UserProvider, public events: Events) {
    this.gerarBotaoLogin();
    events.subscribe('checaUsuario', () => {
      this.gerarBotaoLogin();
    });
    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: EventListPage, title: 'Eventos', icon: 'calendar'},
      {component: CategoriaListPage, title: 'Categorias', icon: 'bookmark'},
      {component: InformativoListPage, title: 'Informativos', icon: 'alert'},
      {component: ResiduosPage, title: 'Resíduos', icon: 'trash'},
      {component: ZonaVerdeListPage, title: 'Zona Verde', icon: 'leaf'},
      {component: PontosDescarteListPage, title: 'Pontos de Descarte', icon: 'trash'},
      ///{component: AlertaListPage, title: 'Alertas', icon: 'flag'},
      //{component: MapaTestePage, title: 'Mapa', icon: 'map'},
      //{component: MapaTesteNativoPage, title: 'Garrafa Pástica', icon: 'map'},
      {component: AreaAdministrativaListPage, title: 'Área Administrativa', icon:'clipboard'},
      {component: DenunciaListPage, title: 'Denúncias', icon:'alert'},
      {component: HistoricoLocalizacoesPage, title: 'Histórico Localizações Usuário', icon:'alert'},
      {component: ConfiguracaoPage, title: 'Configurar', icon:'cog'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  gerarBotaoLogin(){
    this.user = this.userService.retornarUsuario();
    if(this.user){
      this.loginPage = {component: ProfilePage, title: this.user.nome, icon: 'log-in'};
      this.rootPage = HomePage;
    }else{
      this.loginPage = {component: LoginPage, title: 'Login', icon: 'log-in'};
      this.rootPage = HomePage;
    }
  }
  openPage(page: any) : void{
    this.user = this.userService.retornarUsuario();
    this.rootPage = page.component;
    this.menuCtrl.close();
  }

}
