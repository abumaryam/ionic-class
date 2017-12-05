import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost/api/public/index.php/api';


  constructor(public http: HttpClient) {
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



}
