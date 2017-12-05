import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BerandaPage } from '../pages/beranda/beranda';
import { KategoriPage } from '../pages/kategori/kategori';
import { FavoritPage } from '../pages/favorit/favorit';
import { TentangPage } from '../pages/tentang/tentang';
import { DetailPage } from '../pages/detail/detail';
import { TambahPage } from '../pages/tambah/tambah';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilPage } from '../pages/profil/profil';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    BerandaPage,
    KategoriPage,
    FavoritPage,
    TentangPage,
    DetailPage,
    TabsPage,
    ProfilPage,
    TambahPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BerandaPage,
    KategoriPage,
    FavoritPage,
    TentangPage,
    DetailPage,
    TabsPage,
    ProfilPage,
    TambahPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
