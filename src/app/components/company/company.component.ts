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
      localStorage.setItem('isFirstVisit','false');
      this.router.navigate(['vision']);
    }
    misionClick(){
      localStorage.setItem('isFirstVisit','false');
      this.router.navigate(['mision']);
    }
    nosotrosClick(){
      localStorage.setItem('isFirstVisit','false');
      this.router.navigate(['nosotros']);
    }

}
