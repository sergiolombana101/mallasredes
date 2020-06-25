import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/admin-products/products.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    numOfItems = 0;
    categorias = [];
    productos = [];
    imagenes = [];
    principales = [];
    imagen_principal = '';
    category_selected = '';
    product_selected = '';
    especificaciones = [];
    product_precio = 0;
    opciones = {}
    agregar_err = null;
    product_desc = null;

    constructor(private router:Router,private productService:ProductsService, private _elRef:ElementRef){
    }


    ngOnInit(){
      this.getCategorias();
      this.productService.getCategoryId(this.categorias[0]).subscribe(res=>{
        let id = res['data'][0]['id'];
        this.category_selected = this.categorias[0];
        this.getProductosFromCategorias(id);
        setTimeout(()=>{
          this.getPrincipalImages(id);
        },500)
      })
      let numberString = sessionStorage.getItem('numOfItems');
      this.numOfItems = parseInt(numberString);
      let agregar_err = this._elRef.nativeElement.querySelectorAll('.non-agregar-cell');
      this.agregar_err = agregar_err[0];
    }

    verMas(nombre,producto){
      console.log("Ver mas of: "+producto)
      this.product_selected = producto;
      this.productService.getCategoryId(this.category_selected).subscribe(res_cat=>{
        let cat_id = res_cat['data'][0]['id'];
        this.productService.getProductId(producto).subscribe(res_pro=>{
          let pro_id = res_pro['data'][0]['id'];
          this.getImagenes(cat_id,pro_id);
          this.getEspecificaciones(cat_id,pro_id);
          this.getPrecio(pro_id);
          this.getDesc(pro_id);
        })
      })

    }

    extraImgClick(img,event){
      let imagen = this.imagen_principal;
      this.imagen_principal = img;
      event.target.src = imagen;
      console.log(event.target)
    }

    categoriaSelected(categoria){
      this.productService.getCategoryId(categoria).subscribe(res=>{
        let id = res['data'][0]['id'];
        this.getProductosFromCategorias(id);
        setTimeout(()=>{
          this.getPrincipalImages(id);
          this.loadScript("assets/js/products.js").then(()=>{});
        },200)
      })
    }

    getDesc(id){
      this.productService.getDescription(id).subscribe(res=>{
        if(res['status'] == 200){
          this.product_desc = res['data'][0]['descripcion']
        }
      })
    }
    agregarCart(){
      this.agregar_err.style.opacity = '1';
      setTimeout(()=>{
        this.agregar_err.style.opacity = '0';
      },3000)
     /* let number = parseInt(sessionStorage.getItem('numOfItems'));;
      number++;
      this.numOfItems = number;
      sessionStorage.setItem('numOfItems',number.toString());*/
    }


    getPrincipalImages(category_id){
      this.principales = [];
      for(let x =0; x<this.productos.length;x++){
        this.productService.getProductId(this.productos[x]).subscribe(res_p=>{
          let pro_id = res_p['data'][0]['id'];
          this.productService.getImagenes(category_id,pro_id).subscribe(res=>{
            if(res['status'] == 200){
              let imagenesObj = res['data'];
              for(let imagen in imagenesObj){
                let imagen_base = 'https://raw.githubusercontent.com/sergiolombana101/mallas-redes/master/';
                if(imagenesObj[imagen]['principal'] == 1){
                  imagen_base += imagenesObj[imagen]['nombre'];
                  this.principales.push(imagen_base);
                }
              }
            }      
          })
        })
      }
    }

    getCategorias(){
      this.productService.getCategorias().subscribe(res=>{
        if(res['status'] == 200){
            let categoriasObj = res["data"];
            for(let categoria in categoriasObj){
              this.categorias.push(categoriasObj[categoria]['nombre']);
            }
        }
      });
    }
    getProductosFromCategorias(category_id){
      this.productos = [];
      this.productService.getProductosFromCategorias(category_id).subscribe(res=>{
        if(res['status'] == 200){
          let productosObj = res["data"];
          for(let producto in productosObj){
            this.productos.push(productosObj[producto]['nombre'])
          }
        }
      })
    }

    getImagenes(category_id,product_id){
      this.imagenes = [];
      this.productService.getImagenes(category_id,product_id).subscribe(res=>{
        if(res['status'] == 200){
          let imagenesObj = res['data'];
          for(let imagen in imagenesObj){
            let imagen_base = 'https://raw.githubusercontent.com/sergiolombana101/mallas-redes/master/';
            if(imagenesObj[imagen]['principal'] == 1){
              imagen_base += imagenesObj[imagen]['nombre'];
              this.imagen_principal =  imagen_base;
            }else{
              imagen_base += imagenesObj[imagen]['nombre'];
              this.imagenes.push(imagen_base);
            }
          }
        }
      })
    }

    getEspecificaciones(category_id, product_id){
      this.especificaciones = [];
      this.productService.getEspecificaciones(category_id, product_id).subscribe(res=>{
        if(res["status"] == 200){
          let especsObj = res['data'];
          for(let espec in especsObj){
            this.especificaciones.push(especsObj[espec]);
            //console.log(especsObj[espec]['tipo']);
            if(especsObj[espec]['tipo'] == 'Desplegable'){
              this.productService.getOpciones(product_id,especsObj[espec]['id']).subscribe(espec_res=>{
                if(espec_res['status'] == 200){
                  let opciones = [];
                  for(let opcion in espec_res['data']){
                    opciones.push(espec_res['data'][opcion]['nombre']);
                  }
                  this.opciones[especsObj[espec]['nombre']] = opciones;
                }
              })
            }
          }
          console.log(this.opciones);
        }
      })
    }

    getPrecio(product_id){
      this.productService.getPrecio(product_id).subscribe(res=>{
        if(res['status'] == 200){
          let precio = parseFloat(res['data'][0]['precio']);
          this.product_precio = precio;
        }
      })
    }

    loadScript(url, details=false){
      return new Promise((resolve,reject)=>{
        const script = document.createElement("script");
        script.src = url;
        script.onload = ()=>{
          resolve();
        };
        (details) ? document.getElementsByTagName("body")[0].appendChild(script) : document.getElementsByTagName("head")[0].appendChild(script);
        resolve();
         
      })
    }

}
