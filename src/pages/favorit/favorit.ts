import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';



/**
 * Generated class for the FavoritPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorit',
  templateUrl: 'favorit.html',
})
export class FavoritPage {

  users: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getUsers();    
  }

  
  getUsers() {
    this.restProvider.getKategori()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritPage');
  }



}
