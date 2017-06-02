import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { EventListPage } from '../pages/event-list/event-list';
import { EventNewPage } from '../pages/event-new/event-new';
import { ConnectionServiceProvider } from '../providers/connection-service/connection-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestPage,
    EventListPage,
    EventNewPage
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
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestPage,
    EventListPage,
    EventNewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectionServiceProvider
  ]
})
export class AppModule {}
