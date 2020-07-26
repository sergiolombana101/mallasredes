import { Component, OnInit, ElementRef } from '@angular/core';
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

    constructor(private fb:FormBuilder,private productService:ProductsService,private _elRef:ElementRef){
      this.enviarForm = this.fb.group({
        nombre:[''],
        correo:[''],
        telefono:[''],
        mensaje:['']
      })
    }

    inputClicked(value){
      let id = '#'+value+'-label'
      let label = this._elRef.nativeElement.querySelectorAll(id);
      label[0].style.transition = '1s';
      label[0].style.top = '7%';
      label[0].style.fontSize = ".9vw";
      label[0].style.color = 'white';

    } 

    ngOnInit(){}
    
    enviar(){
      let empty = this.isEmpty(this.enviarForm)
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
        if(formgroup.controls[control].value == ''){
          return control;
        }
      }
      return '';
    }

}
