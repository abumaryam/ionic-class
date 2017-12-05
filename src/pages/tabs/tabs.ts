import { Component } from '@angular/core';
import { BerandaPage } from '../beranda/beranda';
import { KategoriPage } from '../kategori/kategori';
import { FavoritPage } from '../favorit/favorit';
import { TentangPage } from '../tentang/tentang';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BerandaPage;
  tab2Root = KategoriPage;
  tab3Root = FavoritPage;
  tab4Root = TentangPage;
  
  angka = 32;

  constructor() {

  }

}
