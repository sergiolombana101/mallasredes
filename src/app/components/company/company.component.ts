import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    constructor(private router:Router){}

    ngOnInit(){}

    visionClick(){
      this.router.navigate(['vision']);
    }
    misionClick(){
      this.router.navigate(['mision']);
    }
    nosotrosClick(){
      this.router.navigate(['nosotros']);
    }

}
