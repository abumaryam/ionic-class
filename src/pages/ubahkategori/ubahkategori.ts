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
// export class UbahkategoriPage implements OnInit {
export class UbahkategoriPage {

  	id:any; 
  	results: Array<any>;
    public kategori: any;
    public kategorix: any;
	// public kategori = {
	//     nama_kategori: ""
	// }
  	constructor(public navCtrl: NavController, 
  				public navParams: NavParams, 
  				public loadingCtrl: LoadingController, 
  				public restProvider: RestProvider) {

      this.id = this.navParams.get('id');
      let loader = this.loadingCtrl.create({ content: 'Memuat kategori' });
      loader.present();

        this.restProvider.getDetailKategori(this.id)
        .then(data => {
          this.kategori = data;
          console.log('Ini adalah '+this.kategori.nama_kategori);
        });
        loader.dismiss();
  	}

  	// ngOnInit(){
	    
	  //  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbahkategoriPage');
  }

  onSubmit() {
    this.restProvider.updateKategori(this.id,this.kategorix.nama_kategori);
    this.navCtrl.pop();
  };

}
