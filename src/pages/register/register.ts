import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { RestProvider } from '../../providers/rest/rest';
import { TabsPage } from '../../pages/tabs/tabs';
import { Storage } from '@ionic/storage';




@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user:any;

  constructor(public navCtrl: NavController, 
  			public navParams: NavParams,
        public restProvider:RestProvider,
        public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onRegister(form: NgForm) {
    console.log("Nilai username "+form.value.username)
    this.restProvider.registerUser(form.value.username,form.value.password,form.value.email,form.value.name)
    .then(data => {
          this.user = data;
          console.log(this.user);
          storage.set('token', this.user.token);
          storage.set('user_id', this.user.user_id);
          storage.get('token').then((val) => {
            console.log('Tokennya adalah ', val);
          });
      });

    this.navCtrl.push(TabsPage);
  }
}
