import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import "../../../assets/js/products.js"
declare var jQuery: any;
declare function navigateTo(section):any;

@Component({
  selector: 'app-product-routing',
  templateUrl: './product-routing.component.html',
  styleUrls: ['./product-routing.component.css']
})
export class ProductRoutingComponent implements OnInit {

    loaded = false;

    constructor(private router:Router){
      this.loadScript("assets/js/jquery.onepage-scroll.min.js").then(()=>{
        this.loadScript("assets/js/onepage-details.js",true)
        this.loaded = true;
      });
    }

    ngOnInit(){
      let href = this.router.url;
      let path = href.split('/');
      if(path.length == 3){
        let section = path[2];
        setTimeout(()=>{
          navigateTo(section);
        },200)
      }
      console.log(path);
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
