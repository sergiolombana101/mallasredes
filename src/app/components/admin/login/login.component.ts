import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error : any;

    constructor(private fb:FormBuilder,private router:Router, private loginService: LoginService){
      this.loginForm = this.fb.group({
        correo:[''],
        contrasena:['']
      })
    }

    ngOnInit(){}

    accederPresionado(){
      this.error = '';
      let credenciales = [this.loginForm.controls['correo'].value, this.loginForm.controls['contrasena'].value];
      this.error = this.estanVacias(credenciales);
      if(this.error == undefined){
        this.loginService.autenticar(credenciales).subscribe(res=>{
          let response_data = JSON.parse(res['_body'])
          if(response_data.status == 401){
            this.error = response_data.message;
          }else{
            localStorage.setItem('logged','true');
            this.router.navigateByUrl('/admin/ingresar/inicio')
          }
        });
      }

    }

    estanVacias(credenciales){
      for(let credencial in credenciales){
        if(credenciales[credencial] == ''){
          return 'Por favor llene la información';
        }
      }
    }

}
