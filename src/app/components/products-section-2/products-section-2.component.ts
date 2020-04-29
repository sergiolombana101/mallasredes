import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-2',
  templateUrl: './products-section-2.component.html',
  styleUrls: ['./products-section-2.component.css']
})
export class ProductsSection2Component implements OnInit {

    constructor(private router:Router){
    }


    ngOnInit(){}

}
