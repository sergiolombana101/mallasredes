import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimelineMax } from 'gsap'

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent implements OnInit {

    constructor(private router:Router){
    }
    contactClick(){
      this.router.navigateByUrl("/contactanos");
    }
    productClick(){
      this.router.navigateByUrl("/productos");
    }
    clientesClick(){
      this.router.navigateByUrl("/clientes");
    }
    inicioClick(){
      this.router.navigateByUrl("/");
    }
    verProductos(){
      this.productClick();
    }
    comprarClick(){
      let section = localStorage.getItem('landing-section');
      this.loadScript("assets/js/products.js").then(()=>{
        this.router.navigateByUrl('/productos/'+section);
      })
    }
    adminLogin(){
      this.router.navigateByUrl("/admin/ingresar");
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
    ngOnInit(){}

}
