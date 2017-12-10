import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { URLSearchParams } from "@angular/http";
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost/api/public/index.php/api';


  constructor(public http: HttpClient,public httpdua: Http, public alertCtrl: AlertController) {
    console.log('Hello RestProvider Provider');
  }

  getKategori() { 
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/kategori').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }

  getDetailKategori(id) { 
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/kategori/'+id).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }
/*
  insertKategori(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/kategori/add', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
*/
  insertKategori(nama_kategori) {
    let data = new URLSearchParams();
    data.append('nama_kategori', nama_kategori);

    // this.http.post('http://slimapp/students/add', data)
    this.httpdua.post(this.apiUrl+'/kategori/add', data)
      .subscribe(data => {

        let alert = this.alertCtrl.create({
          title: 'Added',
          subTitle: nama_kategori+' added successfully.',
          buttons: ['OK']
        });
        alert.present();

      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  updateKategori(id,nama_kategori) {
    let data = new URLSearchParams();
    data.append('nama_kategori', nama_kategori);

    this.httpdua.put(this.apiUrl+'/kategori/update/'+id, data)
      .subscribe(data => {

        let alert = this.alertCtrl.create({
          title: 'Update',
          subTitle: 'kategori berhasil diperbaharui.',
          buttons: ['OK']
        });
        alert.present();

      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  deleteKategori(id) {
    // this.http.delete('http://slimapp/students/delete/' + id)
    this.http.delete(this.apiUrl+'/kategori/delete/' + id)
      .subscribe(id => {

        let alert = this.alertCtrl.create({
          title: 'Deleted',
          subTitle: 'Successfully.',
          buttons: ['OK']
        });
        alert.present();

      }, error => {
        console.log(JSON.stringify(error));
      });
  }



  getResep() { 
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/resep').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }



}
