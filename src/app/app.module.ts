import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import { CategoriaServiceProvider } from '../providers/categoria-service/categoria-service';
import { FileChooser } from '@ionic-native/file-chooser';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
import { DatePicker } from '@ionic-native/date-picker';
import { InformativoProvider } from '../providers/informativo/informativo';
import { InformativoNewPage } from '../pages/informativo-new/informativo-new';
import { InformativoListPage } from '../pages/informativo-list/informativo-list';
import { ZonaverdeProvider } from '../providers/zonaverde/zonaverde';
import { ZonaVerdeListPage } from '../pages/zonaverde-list/zonaverde-list';
import { ZonaVerdePage} from '../pages/zonaverde/zonaverde';
import { PontosDescarteProvider } from '../providers/pontosdescarte/pontosdescarte';
import { PontosDescarteListPage } from '../pages/pontosdescarte-list/pontosdescarte-list';
import { PontosDescartePage} from '../pages/pontosdescarte-new/pontosdescarte-new';
import { PontosDescarteDetailPage } from '../pages/pontosdescarte-detail/pontosdescarte-detail';
import { AlertaListPage} from '../pages/alerta-list/alerta-list';
import { AlertaNewPage } from '../pages/alerta-new/alerta-new';
import { AlertaDetailPage } from '../pages/alerta-detail/alerta-detail';
import { AlertaProvider } from '../providers/alerta/alerta';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventListPage,
    EventNewPage,
    EventDetailPage,
    EstadosRadioPage,
    LoginPage,
    UsuarioNewPage,
    ResiduosPage,
    CategoriaSelecionarPage,
    SafeUrlPipe,
    InformativoNewPage,
    InformativoListPage,
    ZonaVerdePage,
    ZonaVerdeListPage,
    PontosDescarteListPage,
    PontosDescartePage,
    PontosDescarteDetailPage,
    AlertaListPage,
    AlertaNewPage,
    AlertaDetailPage
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
    EventListPage,
    EventNewPage,
    EventDetailPage,
    EstadosRadioPage,
    LoginPage,
    UsuarioNewPage,
    ResiduosPage,
    CategoriaSelecionarPage,
    InformativoNewPage,
    InformativoListPage,
    ZonaVerdePage,
    ZonaVerdeListPage,
    PontosDescarteListPage,
    PontosDescartePage,
    PontosDescarteDetailPage,
    AlertaListPage,
    AlertaNewPage,
    AlertaDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    EventoServiceProvider,
    CategoriaServiceProvider,
    FileChooser,
    ImagePicker,
    Base64,
    DatePicker,
    InformativoProvider,
    ZonaverdeProvider,
    PontosDescarteProvider,
    AlertaProvider
  ]
})
export class AppModule {}
