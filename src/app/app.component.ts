import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

declare var $:any
declare function cancelInterval() : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent{

  href = '';
  path : any;
  componentName : any;
  loaded = false;
  constructor(
 
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private location:Location
  ) {
    localStorage.setItem('shouldTransition','true');
    localStorage.setItem('countForTransition','1');
    localStorage.setItem("loaded","false");
    this.loadScript("assets/js/nav-bar.js").then(()=>{
      this.loadScript("assets/js/jquery.onepage-scroll.min.js",true).then(()=>{
        this.loadScript("assets/js/home-landing.js").then(()=>{
          this.loadScript("assets/js/onepage-details.js").then(()=>{
            this.loadScript("assets/js/products.js").then(()=>{
              this.loaded = true;
              localStorage.setItem("loaded","true");
            })
          })
        })
      })
    });
   }



  // Scroll To Top When Route Changes
  onActivate(event: any) {
    console.log("onActivate called");
    this.componentName = event.constructor.__annotations__[0].selector;
    switch(this.componentName){
      case "app-home-routing":
        if(sessionStorage.getItem('visitCount') == null){
          sessionStorage.setItem('visitCount','1');
        }else{
          let count = parseInt(localStorage.getItem('visitCount'));
          count++;
          sessionStorage.setItem('visitCount',count+"");
        }
        localStorage.setItem("component","home");
        this.loadScript("assets/js/home-landing.js");
        break;
      case "app-product-routing":
        cancelInterval();
        localStorage.setItem("component","products");
        this.loadScript("assets/js/products.js");
        break;
      case "app-clientes":
        cancelInterval();
        localStorage.setItem("component","clientes");
        break;
      case "app-contact":
        cancelInterval();
        localStorage.setItem("component","contact");
        this.loadScript("assets/js/contact.js").then(()=>{})
        break;
      case "app-login":
        cancelInterval();
        localStorage.setItem("component","login");
        this.loadScript("assets/js/login.js").then(()=>{})
        break;

    }
    sessionStorage.setItem("numOfItems","0");
    sessionStorage.setItem("activeSection","0");
    sessionStorage.setItem("prevSection","0");
    localStorage.setItem("onProducts","false");
    localStorage.removeItem("direction")
    localStorage.setItem("case","");
    if (isPlatformBrowser(this.platformId)) {
      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 10);
    }

    localStorage.setItem("loaded","false");
    this.loadScript("assets/js/home-landing.js").then(()=>{
      this.loadScript("assets/js/jquery.onepage-scroll.min.js",true).then(()=>{
        this.loadScript("assets/js/nav-bar.js").then(()=>{
          this.loadScript("assets/js/onepage-details.js").then(()=>{
            this.loadScript("assets/js/products.js").then(()=>{
              this.loaded = true;
              localStorage.setItem("loaded","true");
            })
          })
        })
      })
    });
  }

  loadScript(url, details=false){
    return new Promise((resolve,reject)=>{
      const script = document.createElement("script");
      script.src = url;
      script.onload = ()=>{
        resolve();
      };
      (details) ? document.getElementsByTagName("body")[0].appendChild(script) : document.getElementsByTagName("head")[0].appendChild(script);
      resolve();
       
    })
  }

  
}
