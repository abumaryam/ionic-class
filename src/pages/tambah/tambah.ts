import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';



/**
 * Generated class for the TambahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambah',
  templateUrl: 'tambah.html',
})
export class TambahPage {
  
  public formku : FormGroup;

  constructor(public navCtrl: NavController, 
    public http       : Http,
    public NP         : NavParams,
    public fb         : FormBuilder,
    public toastCtrl  : ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahPage');
  }

  saveEntry(){

  }

}
