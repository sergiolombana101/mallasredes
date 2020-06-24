import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';

declare var require:any;
declare const Buffer:any;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //endPoint = 'https://mallas-server.herokuapp.com/api';
  endPoint = 'http://127.0.0.1:8080/api';
  response: any;

  constructor(private http:Http, private httpClient:HttpClient) {
   }

  getCategorias(){
    console.log('Calling categorias')
    return this.httpClient.get(this.endPoint+'/categorias')
      .pipe(map(res=>{return res}));
  }

  getProductosFromCategorias(categoria){
    return this.httpClient.get(this.endPoint+'/productosFrom/'+categoria)
      .pipe(map(res=>{return res;}))
  }

  getEspecificaciones(categoria_id,product_id){
    return this.httpClient.get(this.endPoint+'/especs/'+categoria_id+'/'+product_id)
      .pipe(map(res=>{return res;}))
  }

  getImagenes(categoria_id,product_id){
    return this.httpClient.get(this.endPoint+'/imagenes/'+categoria_id+'/'+product_id)
      .pipe(map(res=>{return res;}))
  }

  addCategory(nombre:any){
    console.log('Service: '+nombre)
    return this.http.post(this.endPoint+'/addCategory',[nombre])
      .pipe(map(res=>{return res}))
  }

  eliminarCategoria(categoria:any){
    return this.http.post(this.endPoint+'/deleteCategory',[categoria])
      .pipe(map(res=>{return res}))
  }
  eliminarProducto(producto,categoria_id,categoria_name){
    return this.http.post(this.endPoint+'/deleteProduct',[producto,categoria_id,categoria_name])
      .pipe(map(res=>{return res}))
  }

  editCategorias(valueChanged:any,ogValue:any){
    return this.http.post(this.endPoint+'/editCategory',[valueChanged,ogValue])
      .pipe(map(res=>{return res}))
  }

  getCategoryId(nombre){
    return this.httpClient.get(this.endPoint+'/getCatId/'+nombre)
      .pipe(map(res=>{return res;}))
  }
  getProductId(nombre){
    return this.httpClient.get(this.endPoint+'/getProductId/'+nombre)
      .pipe(map(res=>{return res;}))
  }

  addProduct(product,category_id,price,category_nombre){
    return this.http.post(this.endPoint+'/addProduct',[product,category_id,price,category_nombre])
      .pipe(map(res=>{return res;}))
  }

  editProducto(valuesChangesObj:any,ogValue:any,category:any){
    return this.http.post(this.endPoint+'/editProduct',[valuesChangesObj,ogValue,category])
      .pipe(map(res=>{return res}))
    }
  editarPrecio(product_id:any,precio:any){
    return this.http.post(this.endPoint+'/editPrice',[product_id,precio])
      .pipe(map(res=>{return res;}))
  }
  getOpciones(product_id:any,espec:any){
    console.log('Getting opciones where product_id is: '+product_id+' and espec is: '+espec);
    return this.httpClient.get(this.endPoint+'/getOpciones/'+product_id+'/'+espec)
      .pipe(map(res=>{return res;}))
  }
  getEspecId(product_id,nombre){
    return this.httpClient.get(this.endPoint+'/getEspecId/'+product_id+'/'+nombre)
      .pipe(map(res=>{return res;}))
  }
  editEspecs(field,value,espec_nombre:any,product_id:any){
    return this.http.post(this.endPoint+'/editEspec',[field,value,espec_nombre,product_id])
      .pipe(map(res=>{return res;}))
  }
  addOpcion(nombre,espec_id,product_id){
    console.log('Adding opcion with: '+nombre+' '+espec_id+' '+product_id);
    return this.http.post(this.endPoint+'/addOpcion',[nombre,espec_id,product_id])
      .pipe(map(res=>{return res}));
  }

  eliminarOpcion(nombre,espec_id,product_id){
    return this.http.post(this.endPoint+'/eliminarOpcion',[nombre,espec_id,product_id])
      .pipe(map(res=>{return res}));
  }
  addEspec(values,category_id,product_id){
    return this.http.post(this.endPoint+'/addEspec',[values,category_id,product_id])
      .pipe(map(res=>{return res}));
  }
  getImgBank(){
    return this.httpClient.get(this.endPoint+'/getBank')
      .pipe(map(res=>{return res;}));
  }
  setPrincipalImg(img,product_id,category_id,categoria_name,producto_name){
    return this.http.post(this.endPoint+'/setPrincipalImg',[img,product_id,category_id,categoria_name,producto_name])
      .pipe(map(res=>{return res;}))
  }
  setSecondaryImg(curr_img,new_img,product_id,category_id,category_name,product_name){
    return this.http.post(this.endPoint+'/setSecondaryImg',[curr_img,new_img,product_id,category_id,category_name,product_name])
      .pipe(map(res=>{return res;}))
  }
  getPrecio(product_id){
    return this.httpClient.get(this.endPoint+'/getPprecio/'+product_id)
      .pipe(map(res=>{return res;}))
  }
  getDescription(product_id){
    return this.httpClient.get(this.endPoint+'/getDesc/'+product_id)
      .pipe(map(res=>{return res;}))
  }
  addDesc(product_id,desc){
    return this.http.post(this.endPoint+'/addDesc',[product_id,desc])
    .pipe(map(res=>{return res}));
  }
  enviarEmail(values){
    return this.http.post(this.endPoint+'/enviarEmail',[values])
      .pipe(map(res=>{return res}));
  }
}
