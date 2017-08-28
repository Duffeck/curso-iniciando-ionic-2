import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ResiduosPage } from '../pages/residuos/residuos';
//import { EventDetailPage } from '../pages/event-detail/event-detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages : Array<{component: any, title: string, icon: string}>;
  rootPage:any = HomePage;
  loginPage: {component: any, title: string, icon: string};

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    this.loginPage = {component: LoginPage, title: 'Login', icon: 'log-in'};
    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      //{component: MenuTestPage, title: 'Menu Teste', icon: 'home'},
      {component: EventListPage, title: 'Eventos', icon: 'calendar'},
      {component: ResiduosPage, title: 'Resíduos', icon: 'trash'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any) : void{
    this.rootPage = page.component;
    this.menuCtrl.close();
  }
}
