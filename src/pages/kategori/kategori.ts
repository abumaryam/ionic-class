import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TambahPage } from '../../pages/tambah/tambah'



@IonicPage()
@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori.html',
})
export class KategoriPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    this.getKategori();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriPage');
  }

  kategori: any;
  //Buat fungsi seperti di bawah untuk mengambil dari provider yang sudah kita buat tadi

  getKategori() {
      this.restProvider.getKategori()
      .then(data => {
        this.kategori = data;
        console.log(this.kategori);
      });
    }
  tambahKategori(){
    this.navCtrl.push(TambahPage)
  }




}
