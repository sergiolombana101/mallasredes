import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var jQuery: any;

@Component({
  selector: 'app-product-routing',
  templateUrl: './product-routing.component.html',
  styleUrls: ['./product-routing.component.css']
})
export class ProductRoutingComponent implements OnInit {

    loaded = false;

    constructor(){
      this.loadScript("assets/js/jquery.onepage-scroll.min.js").then(()=>{
        this.loadScript("assets/js/onepage-details.js",true)
        this.loaded = true;
      });
    }

    ngOnInit(){
    }

    onActivate(event:any){
      console.log("On Activate called in prodct routing");
    }
    loadScript(url, details=false){
      return new Promise((resolve,reject)=>{
        const script = document.createElement("script");
        script.src = url;
        script.onload = ()=>{
          resolve();
        };
        (details) ? document.getElementsByTagName("body")[0].appendChild(script) : document.getElementsByTagName("head")[0].appendChild(script) 
         
      })
    }
}
