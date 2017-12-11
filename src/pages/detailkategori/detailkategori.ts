import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UbahkategoriPage } from '../../pages/ubahkategori/ubahkategori';


@IonicPage()
@Component({
  selector: 'page-detailkategori',
  templateUrl: 'detailkategori.html',
})
export class DetailkategoriPage implements OnInit {

	id:any; 
  	kategori: any;

	// public kategori:any;
	// public kategori = {
	//     nama_kategori: ""
	// }
	
    constructor(public navCtrl: NavController, 
    			public navParams: NavParams,
    			public loadingCtrl: LoadingController,
    			public restProvider: RestProvider) {
    }

    ngOnInit(){
	    // this.refreshKategori(this.navParams.get('id'));
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

	ionViewDidEnter() {
    	this.refreshKategori(this.navParams.get('id'));
  	}

  	refreshKategori(id){
  		this.id = id;
	    let loader = this.loadingCtrl.create({ content: 'Memuat kategori' });
	    loader.present();

	      this.restProvider.getDetailKategori(this.id)
	      .then(data => {
	        this.kategori = data;
	        console.log(this.kategori);
	      });
	      loader.dismiss();
  	}

	deleteKategori(id){
	    let loader = this.loadingCtrl.create({ content: 'Menghapus' });
	    loader.present();
	    	console.log("delete id = "+id)
	      this.restProvider.deleteKategori(id);
	      loader.dismiss();
	      this.navCtrl.pop();
	 }

	ubahKategori(id){
	    this.navCtrl.push(UbahkategoriPage,{ id: id });
	 }

    ionViewDidLoad() {
      console.log('ionViewDidLoad DetailkategoriPage');
    }

    

}
