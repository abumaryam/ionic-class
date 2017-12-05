import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahPage } from './tambah';

@NgModule({
  declarations: [
    TambahPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahPage),
  ],
})
export class TambahPageModule {}
