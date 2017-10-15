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
import { ZonaVerdePage} from '../pages/zonaverde/zonaverde';
import { ResiduosNewPage } from '../pages/residuos-new/residuos-new';

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
    ResiduosNewPage
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
    ResiduosNewPage
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
    ZonaverdeProvider
  ]
})
export class AppModule {}
