import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/admin-products/products.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    loaded = false;
    enviarForm : FormGroup;
    empty = false;

    constructor(private fb:FormBuilder,private productService:ProductsService){
      this.enviarForm = this.fb.group({
        nombre:[''],
        correo:[''],
        telefono:[''],
        mensaje:['']
      })
    }

    ngOnInit(){}
    
    enviar(){
      let empty = this.isEmpty(this.enviarForm)
      console.log('Empty: '+empty);
      if(empty != ''){
        this.empty = true;
        (document.querySelector('#'+empty+"-label") as HTMLElement).style.color = '#DC5050';
        return;
      }else{
        let values = [];
        for(let control in this.enviarForm.controls){
          values.push(this.enviarForm.controls[control].value);
        }
        this.productService.enviarEmail(values).subscribe(res=>{
          console.log(res);
        })
      }
    }

    isEmpty(formgroup){
      for(let control in formgroup.controls){
        console.log(formgroup.controls[control].value);
        if(formgroup.controls[control].value == ''){
          return control;
        }
      }
      return '';
    }

}
