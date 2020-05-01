import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
declare var jQuery: any;

@Component({
  selector: 'app-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.css']
})
export class HomeRoutingComponent implements OnInit {

    url = "assets/js/jquery.onepage-scroll.min.js";
    loaded =true;
    constructor(){
      //this.loadScript("assets/js/jquery.onepage-scroll.min.js").then(()=>{
        //this.loadScript("assets/js/onepage-details.js",true)
        //this.loadScript("assets/js/nav-bar.js")
        //this.loaded = true;
      //});
    }

    ngOnInit(){
    }

    /*loadScript(url, details=false){
        console.log("Reloading script");
        return new Promise((resolve,reject)=>{
          const script = document.createElement("script");
          script.src = url;
          script.onload = ()=>{
            resolve();
          };
          (details) ? document.getElementsByTagName("body")[0].appendChild(script) : document.getElementsByTagName("head")[0].appendChild(script) 
          
        })
    }*/
  
}
