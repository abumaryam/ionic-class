import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-tambah',
  templateUrl: 'tambah.html',
})
export class TambahPage {
  results: Array<any>;
  public kategori = {
    nama_kategori: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahPage');
  }
  onSubmit() {
    this.restProvider.insertKategori(this.kategori.nama_kategori);
    this.navCtrl.pop();
  };

}
