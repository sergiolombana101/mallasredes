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
    loaded = false;
    opacity = false;
    visitCount:String

    constructor(){
  
    }

    ngOnInit(){
    console.log(localStorage.getItem('visitCount'))
     this.visitCount = localStorage.getItem('visitCount');
     if(this.visitCount == '1'){
      setTimeout(()=>{
        this.opacity = true;
       },9000)
       setTimeout(()=>{
         this.loaded = true;
       },9800)
     }else{
      this.loaded = true;
    }
  }

  
}
