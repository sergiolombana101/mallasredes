import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    constructor(private router:Router){
      this.loadScript("assets/js/nav-bar.js").then(()=>{})
    }

    ngOnInit(){}

    inicioClick(){
      this.router.navigateByUrl("/");
    }
    contactClick(){
      this.router.navigateByUrl("/contactanos");
    }
    clientesClick(){
      this.router.navigateByUrl("/clientes");
    }
    productosClick(){
      this.router.navigateByUrl("/productos")
    }
    loadScript(url){
      return new Promise((resolve,reject)=>{
        const script = document.createElement("script");
        script.src = url;
        script.onload = ()=>{
          resolve();
        };
        document.getElementsByTagName("body")[0].appendChild(script);
         
      })
    }


}
