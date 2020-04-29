import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    loaded = false;

    constructor(){
      //this.loadScript("assets/js/contact.js").then(()=>{
        //this.loaded = true;
      //})
    }

    ngOnInit(){}

  /*  loadScript(url){
      return new Promise((resolve,reject)=>{
        const script = document.createElement("script");
        script.src = url;
        script.onload = ()=>{
          resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
         
      })
    }*/
}
