import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TambahPage } from '../../pages/tambah/tambah';
import { DetailkategoriPage } from '../../pages/detailkategori/detailkategori';



@IonicPage()
@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori.html',
})
export class KategoriPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider,public loadingCtrl: LoadingController) {

    // this.getKategori();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriPage');
    // this.getKategori();
  }
  ionViewDidEnter() {
    this.getKategori();
  }
  kategori: any;
  //Buat fungsi seperti di bawah untuk mengambil dari provider yang sudah kita buat tadi

  getKategori() {
    let loader = this.loadingCtrl.create({ content: 'Memuat kategori' });
    loader.present();

      this.restProvider.getKategori()
      .then(data => {
        this.kategori = data;
        console.log(this.kategori);
      });
      loader.dismiss();

  }

  tambahKategori(){
    this.navCtrl.push(TambahPage);
  }

  detailKategori(id){
    this.navCtrl.push(DetailkategoriPage,{ id: id });
  }




}
