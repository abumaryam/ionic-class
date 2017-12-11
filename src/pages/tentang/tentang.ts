import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the TentangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tentang',
  templateUrl: 'tentang.html',
})
export class TentangPage {

  constructor(public camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TentangPage');
  }
  takePhoto(){
	  	const options: CameraOptions = {
		  	quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
		 	let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		
		});
	}

}
