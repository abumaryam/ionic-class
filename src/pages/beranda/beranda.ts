import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html',
})
export class BerandaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    this.getResep();
  }

  rasa = "Manis";
  resep:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

  getResep() {
    this.restProvider.getResep()
    .then(data => {
      this.resep = data;
      console.log(this.resep);
    });
  }

  lihatDetail(judul_resep: string){
  	this.navCtrl.push(DetailPage,{jdlResep:judul_resep});
  }

}
