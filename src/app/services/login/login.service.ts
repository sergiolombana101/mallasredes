import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, windowWhen } from 'rxjs/operators';
//const process = require('process');

declare var require:any;
declare const Buffer:any;

const cr = require('crypto-js');
const key = 'redesmallas'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endPoint = '/api';
  //endPoint = 'http://localhost:8080/api' FOR DEVELOPMENT
  response: any;

  constructor(private http:Http) { }

  autenticar(credenciales){
    credenciales[1] = this.encrypt(credenciales[1]);
    return this.http.post(this.endPoint+'/auth',credenciales)
      .pipe(map(res=>{return res})) 
  }
  encrypt(text) {
    return cr.AES.encrypt(text,key).toString();
  }
}
