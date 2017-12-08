import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-detailkategori',
  templateUrl: 'detailkategori.html',
})
export class DetailkategoriPage implements OnInit {

	id:any; 
	kategori:any;
	
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
      console.log('ionViewDidLoad DetailkategoriPage');
    }

    

}
