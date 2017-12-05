import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit {
  judul_resep : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.judul_resep = this.navParams.get('jdlResep');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
