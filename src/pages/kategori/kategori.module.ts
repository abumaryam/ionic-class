import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KategoriPage } from './kategori';

@NgModule({
  declarations: [
    KategoriPage,
  ],
  imports: [
    IonicPageModule.forChild(KategoriPage),
  ],
})
export class KategoriPageModule {}
