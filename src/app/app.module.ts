import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { BerandaPage } from '../pages/beranda/beranda';
import { KategoriPage } from '../pages/kategori/kategori';
import { FavoritPage } from '../pages/favorit/favorit';
import { TentangPage } from '../pages/tentang/tentang';
import { DetailPage } from '../pages/detail/detail';
import { TambahPage } from '../pages/tambah/tambah';
import { DetailkategoriPage } from '../pages/detailkategori/detailkategori';
import { UbahkategoriPage } from '../pages/ubahkategori/ubahkategori';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilPage } from '../pages/profil/profil';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RestProvider } from '../providers/rest/rest';
import { Camera } from '@ionic-native/camera';


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
    DetailkategoriPage,
    UbahkategoriPage,
    RegisterPage,
    TambahPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    DetailkategoriPage,
    UbahkategoriPage,
    RegisterPage,
    TambahPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
