import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the UbahkategoriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ubahkategori',
  templateUrl: 'ubahkategori.html',
})
export class UbahkategoriPage implements OnInit {

  	id:any; 
  	results: Array<any>;
	public kategori = {
		id:"",
	    nama_kategori: ""
	}
  	constructor(public navCtrl: NavController, 
  				public navParams: NavParams, 
  				public loadingCtrl: LoadingController, 
  				public restProvider: RestProvider) {
  	}

  	ngOnInit(){
	    this.id = this.navParams.get('id');
	    let loader = this.loadingCtrl.create({ content: 'Memuat kategori' });
	    loader.present();

	      this.restProvider.getDetailKategori(this.id)
	      .then(data => {
	        this.kategori = data;
	        console.log(this.kategori);
	      });
	      loader.dismiss();
	 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbahkategoriPage');
  }

  onSubmit() {
    this.restProvider.updateKategori(this.id,this.kategori.nama_kategori);
    this.navCtrl.pop();
  };

}
