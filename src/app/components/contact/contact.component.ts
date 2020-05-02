import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    loaded = false;
    enviarForm : FormGroup;
    empty = false;

    constructor(private fb:FormBuilder){
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
      if(empty != ''){
        this.empty = true;
        console.log(empty);
        (document.querySelector('#'+empty+"-label") as HTMLElement).style.color = '#DC5050';
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
