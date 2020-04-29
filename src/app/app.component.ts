import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent{

  href = '';
  path : any;
  componentName : any;
  constructor(
 
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private location:Location
  ) {

   }



  // Scroll To Top When Route Changes
  onActivate(event: any) {
    this.componentName = event.constructor.name;
    console.log(this.componentName);
    if(this.componentName == "HomeRoutingComponent"){
      localStorage.setItem("component","home");
    }else if(this.componentName == "ProductRoutingComponent"){
      localStorage.setItem("component","products");
    }
    sessionStorage.setItem("activeSection","0");
    sessionStorage.setItem("prevSection","0");
    localStorage.setItem("onProducts","false");
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
  }
}
