import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { EventListPage } from '../pages/event-list/event-list';
import { EventNewPage } from '../pages/event-new/event-new';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EstadosRadioPage } from '../pages/estados-radio/estados-radio';
import { LoginPage } from '../pages/login/login';
import { UsuarioNewPage } from '../pages/usuario-new/usuario-new';
import { UserProvider } from '../providers/user/user';
import { EventoServiceProvider } from '../providers/evento-service/evento-service';
import { ResiduosPage } from '../pages/residuos/residuos';
import { CategoriaSelecionarPage } from '../pages/categoria-selecionar/categoria-selecionar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestPage,
    EventListPage,
    EventNewPage,
    EventDetailPage,
    EstadosRadioPage,
    LoginPage,
    UsuarioNewPage,
    ResiduosPage,
    CategoriaSelecionarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  }),
  HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestPage,
    EventListPage,
    EventNewPage,
    EventDetailPage,
    EstadosRadioPage,
    LoginPage,
    UsuarioNewPage,
    ResiduosPage,
    CategoriaSelecionarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    EventoServiceProvider
  ]
})
export class AppModule {}
