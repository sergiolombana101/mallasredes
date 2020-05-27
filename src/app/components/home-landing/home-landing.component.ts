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

    ngOnInit(){}

}
