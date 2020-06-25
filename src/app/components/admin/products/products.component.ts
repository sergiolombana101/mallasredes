import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/admin-products/products.service';
import {ElementRef,Renderer2} from '@angular/core';


@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {

    radio_html:any;
  
    categorias = [];
    productos = [];
    category_selected = '';
    product_selected = '';
    especificaciones = [];
    imagen_principal = '';
    imagenes = [];
    displayCover = false;
    form_error = '';
    cover_mode = '';
    categoriaCopy = [];
    productCopy = [];
    precios_productos = [];
    preciosCopy = [];
    productSelectedRadio = '';

    product_id = 0;
    precioProduct = 0;

    categoriaForm:FormGroup;
    productoForm:FormGroup;
    precioForm:FormGroup;
    opcionForm:FormGroup;
    editarCategoriaForm:FormGroup;
    especForm:FormGroup;
    edit_desc_product = null;
    descForm:FormGroup;
    /*----FOR ESPECIFICACIONES --------*/
    especificaciones_productId = 0;
    productos_especificaciones = [];
    categoria_especificaciones = [];
    especs_categoria_selected = '';
    especs_producto_selected = '';

    espec_editar = {};
    espec_id = null;
    opciones_espec = [];
    showDesplegable = false;
    agregaroption = false;
    opcionselected = null;

    /*----FOR IMAGES------*/
    changeImg = false;
    bank_images = [];
    image_expand = null; // IMAGE WHEN USER SELCTS IMAGE FROM IMAGE BANK
    secondary_img = null; //IMAGE WHEN USER SELECTS SECONDARY IMAGE
    secondaryImgBoolean = false;
    allowPrincipalImage = false;

    constructor(private router:Router, private productService:ProductsService,private fb:FormBuilder,private _elRef:ElementRef){
      this.categoriaForm = this.fb.group({
        nombre:['']
      });
      this.productoForm = this.fb.group({
        nombre:[''],
        precio:['']
      })
      this.precioForm = this.fb.group({
        valor:['']
      })
      this.especForm = this.fb.group({
        id:[''],
        nombre:[''],
        tipo:[''],
        obligatorio:[''],
        precio:['']
      })
      this.opcionForm = this.fb.group({
        nombre:['']
      })
      this.descForm = this.fb.group({
        desc:['']
      })
    }

    ngOnInit(){
      this.getCategorias();
      this.productService.getCategoryId(this.categorias[0]).subscribe(res_id=>{
        let id = res_id['data'][0]["id"];
        this.getProductosFromCategorias(id);
        this.getProductsFromCategorias_Especs(id);
        this.productService.getProductId(this.productos[0]).subscribe(res=>{
          let product_id = res['data'][0]['id']
          this.getEspecificaciones(id,product_id);
        })
      })
      /*---- WAITS FOR THE CATEGORIES TO BE FETCHED AND THEN GETS IMAGES BASED ON THEM ---------*/
      setTimeout(()=>{
        this.productService.getCategoryId(this.categorias[0]).subscribe(res_id=>{
          let id = res_id['data'][0]["id"];
          this.getImagenes(id,this.product_id);
          this.category_selected = this.categorias[0];
          this.especs_categoria_selected = this.categorias[0];
        })

        this.radio_html = this._elRef.nativeElement.querySelectorAll('.product-identifier');
        console.log(this.radio_html);
        for(let radio in this.radio_html){
          if(this.radio_html[radio].value == this.productos[0]){
            this.radio_html[radio].checked = true;
          }
        }
      },1000)

    }

    selectChange(valor){
      if(valor == 'Desplegable'){
        this.showDesplegable = true;
      }else{
        this.showDesplegable = false;
      }
    }
    changeDesplegable(valor){
      this.espec_editar['tipo'] = valor;
      this.showDesplegable = false;
    }
    desplegableClicked(){
      console.log('Show Desplegable clicked');
      this.showDesplegable = true;
    }
    hideDesplegable(){
      this.showDesplegable = false;
    }
    changeCategory(event){
      this.categoriaCopy[event.target.name] = event.target.value;
    }
    changeProductPrice(event){
      this.preciosCopy[event.target.name] = event.target.value; 
    }
    changeProductName(event){
      this.productCopy[event.target.name] = event.target.value;
    }
    changeRadio(event){
      this.precioProduct = this.precios_productos[event.target.id];
      this.product_selected = event.target.value;
      this.productService.getCategoryId(this.category_selected).subscribe(res=>{
        let id = res['data'][0]["id"];
        this.productService.getProductId(this.product_selected).subscribe(res=>{
          this.product_id  = res['data'][0]["id"];
          this.especificaciones_productId = this.product_id;
          this.getEspecificaciones(id,this.product_id);
          this.getImagenes(id,this.product_id);
        })
      })
    }
    categoriaDropdownChange(categoria){
      this.productService.getCategoryId(categoria).subscribe(res=>{
        if(res['status'] == 200){
          let category_id = res['data'][0]['id'];
          this.getProductsFromCategorias_Especs(category_id);
        }
      })
    }

    editarDescripcion(producto){
      this.edit_desc_product = producto;
      this.productService.getProductId(producto).subscribe(res=>{
        if(res['status'] == 200){
          let product_id = res['data'][0]['id'];
          this.productService.getDescription(product_id).subscribe(res=>{
            this.cover_mode = 'descripcion';
            if(res['data'][0]['descripcion'] != '' || res['data'][0]['descripcion'] != undefined){
              this.descForm.controls['desc'].setValue(res['data'][0]['descripcion']);
            }
          })
        }
      })
    }

    addDesc(){
      let desc = this.descForm.controls['desc'].value
      if(desc == ''){
        this.form_error = 'Valor Invalido'
        return;
      }
      this.productService.getProductId(this.edit_desc_product).subscribe(res=>{
        if(res['status'] == 200){
          let product_id = res['data'][0]['id'];
          this.productService.addDesc(product_id,desc).subscribe(res=>{
            if(res['status'] == 200){
              this.cover_mode = '';
              this.displayCover = false;
              this.form_error = '';
            }
          })
        }
      })
    }

    productoDropdownChange(producto){
      this.productService.getProductId(producto).subscribe(res=>{
        if(res['status'] == 200){
          let product_id = res['data'][0]['id'];
          this.especificaciones_productId = product_id;
          this.especs_producto_selected = producto;
          this.productService.getCategoryId(this.especs_categoria_selected).subscribe(res=>{
            let category_id = res['data'][0]['id'];
            this.getEspecificaciones(category_id,product_id);
            this.getImagenes_Especs(category_id,product_id);
          })
        }
      })
    }
    addEspec(){
      this.cover_mode = 'agregar_espec';
      this.displayCover = true;
      this.opciones_espec = [];
    }
    addCategoria(){
      this.cover_mode = 'agregar_categoria';
      this.displayCover = true;
    }
    addProducto(){
      this.cover_mode = 'agregar_producto';
      this.displayCover = true;
    }
    editarCategoria(){
      this.cover_mode = 'editar_categoria';
      this.displayCover = true;
      this.categoriaCopy = this.categorias.slice();
    }
    editProducto(){
      this.cover_mode = 'editar_producto';
      this.displayCover = true;
      this.productCopy = this.productos.slice();
      this.preciosCopy = this.precios_productos.slice();
    }
    editarPrecio(){
      this.cover_mode = 'editar_precio';
      this.displayCover = true;
    }
    editPrecio(){
      if(this.precioForm.controls['valor'].value == ''){
        this.form_error = 'Valor Invalido';
      }
      else{
        let precio = this.precioForm.controls['valor'].value;
        this.productService.editarPrecio(this.product_id,precio).subscribe(res=>{
          if(res['status'] == 200){
            this.displayCover = false;
            this.form_error = '';
            this.precioProduct = precio;
            let product_id = this.product_id;
            product_id--;
            this.precios_productos[product_id] = precio;
          }
        })
      }
    }
    editEspec(){
      //this.productoForm.controls['nombre'].value == ''
      let controls = this.especForm.controls;
      let values = {
        nombre:'',
        tipo:'',
        precio:'',
        obligatorio:''
      }
      for(let control in controls){        
        values[control] = controls[control].value;
        console.log(controls[control].value);
        if(controls[control].value == '' && controls[control].value != 0){
          this.form_error = 'Por favor llene toda la información';
          return;
        }
      }
      let precio = values['precio'];
      delete values['precio'];
      values['precio_adicional'] = precio;
      for(let value in values){
        console.log(value);
        this.productService.editEspecs(value,values[value],this.espec_editar['nombre'],this.especificaciones_productId).subscribe(res=>{
          if(res['status'] == 200){
            this.productService.getCategoryId(this.especs_categoria_selected).subscribe(res=>{
              let category_id = res['data'][0]['id'];
              this.getEspecificaciones(category_id,this.especificaciones_productId);
              this.getImagenes(category_id,this.especificaciones_productId);
              this.form_error = '';
              this.displayCover = false;
            })
          }
        })
      }
      

    }
    editarEspec(espec){
      this.cover_mode = 'editar_espec';
      this.displayCover = true;
      this.espec_editar = this.especificaciones[espec]; 
      for(let control in this.espec_editar){
        this.especForm.controls[control].setValue(this.espec_editar[control]);
      }
      if(this.espec_editar['tipo'] == 'Desplegable'){
        this.opciones_espec = [];
        espec += 1;
        this.productService.getEspecId(this.especificaciones_productId,this.espec_editar['nombre']).subscribe(res=>{
          if(res['status'] == 200){
            let id = res['data'][0]['id'];
            this.productService.getOpciones(this.especificaciones_productId,id).subscribe(res_opciones=>{
              if(res_opciones['status'] == 200){
                console.log(res_opciones['data']);
                let opcionesObj = res_opciones['data'];
                for(let opcion in opcionesObj){
                  if(this.opcionselected == null){this.opcionselected = opcionesObj[opcion]['nombre']}
                  this.opciones_espec.push(opcionesObj[opcion]);
                }
              }
            })
          }
        })
      }
    }
    opcionSelected(nombre){
      this.opcionselected = nombre;
    }
    agregarOpcion(){
      this.agregaroption = true;
    }
    cancelarOpcion(){
      this.agregaroption = false;
    }
    eliminarOpcion(){
      console.log('Eliminar '+this.opcionselected+' where espec_id is = '+this.espec_editar['id']+' and product_id is = '+this.especificaciones_productId);
      this.productService.eliminarOpcion(this.opcionselected,this.espec_editar['id'],this.especificaciones_productId).subscribe(res=>{
        if(res['status'] == 200){
          this.productService.getOpciones(this.especificaciones_productId,this.espec_editar['id']).subscribe(res_opciones=>{
            if(res_opciones['status'] == 200){
              this.opciones_espec = [];
              let opcionesObj = res_opciones['data'];
              for(let opcion in opcionesObj){
                if(this.opcionselected == null){this.opcionselected = opcionesObj[opcion]['nombre']}
                this.opciones_espec.push(opcionesObj[opcion]);
              }
            }
          })
        }
      })
    }
    opcionChangeAgregar(nombre){
      this.opcionselected = nombre;
    }
    addOpcionAgregar(){
      let opcion_nombre = this.opcionForm.controls['nombre'].value;
      if(opcion_nombre != ''){
        if(this.opciones_espec.length == 0){
          this.opcionselected = opcion_nombre;
        }
        this.opciones_espec.push(opcion_nombre);
        this.agregaroption = false;
      }
    }
    eliminarOpcionAgregar(){
      console.log(this.opciones_espec);
      for(let opcion of this.opciones_espec){
        console.log(opcion+" "+this.opcionselected);
        if(opcion == this.opcionselected){
          console.log('Deleting '+ this.opcionselected);
          let index = this.opciones_espec.indexOf(opcion);
          this.opciones_espec.splice(index,1);
          if(this.opciones_espec.length>0){
            this.opcionselected = this.opciones_espec[0];
          }
        }
      }
    }
    agregarEspec(){
      /*------- GET THE CONTROLS FROM THE FORM ------*/
      let nombre = this.especForm.controls['nombre'].value;
      let tipo = this.especForm.controls['tipo'].value;
      let obligatorio = this.especForm.controls['obligatorio'].value;
      let precio = this.especForm.controls['precio'].value;
      let controls = [nombre,tipo,obligatorio];
      /*------ ITERATE THROUGH THE CONTROLS TO SEE IF THEY ARE EMPTY -----*/
      for(let control in controls){
        if(controls[control] == ''){
          this.form_error = 'Por favor llene toda la información';
          return;
        }
      }
      /*-------- CHECK IF THE OPTIONS ARE EMPTY IF THE TYPE IS A DROPDOWN ----*/
      if(tipo == 'Desplegable'){
        if(this.opciones_espec.length == 0){
          this.form_error = 'Por favor agregue por lo menos una opcion para el desplegable';
          return;
        }
        /*for(let opcion in this.opciones_espec){
          this.productService.addOpcion(this.opciones_espec[opcion],)
        }*/
      }
      /*------ ADD THE SPEC TO THE DATABASE --------*/
      this.productService.getCategoryId(this.especs_categoria_selected).subscribe(res=>{
        let category_id = res['data'][0]['id'];
        let values = [nombre,tipo,obligatorio,precio];
        this.productService.addEspec(values,category_id,this.especificaciones_productId).subscribe(res=>{
          if(res['status'] == 200){
            if(tipo == 'Desplegable' && this.opciones_espec.length > 0){
              let data = JSON.parse(res['_body'])
              console.log(data.data)
              for(let opcion in this.opciones_espec){
                this.productService.addOpcion(this.opciones_espec[opcion],data.data,this.especificaciones_productId).subscribe(res=>{
                  console.log(res);
                })
              }
            }
            this.getEspecificaciones(category_id,this.especificaciones_productId);
            this.form_error = '';
            this.displayCover = false;
          }
        })
      })

    }
    addOpcion(){
      let opcion_nombre = this.opcionForm.controls['nombre'].value;
      if(opcion_nombre != ''){
        this.productService.addOpcion(opcion_nombre,this.espec_editar['id'],this.especificaciones_productId).subscribe(res=>{
          if(res['status'] == 200){
            this.productService.getOpciones(this.especificaciones_productId,this.espec_editar['id']).subscribe(res_opciones=>{
              if(res_opciones['status'] == 200){
                this.opciones_espec = [];
                let opcionesObj = res_opciones['data'];
                for(let opcion in opcionesObj){
                  this.opciones_espec.push(opcionesObj[opcion]);
                }
              }
              this.agregaroption = false;
            })
          }
        })
      }
    }
    eliminarCategoria(categoria){
      this.productService.eliminarCategoria(categoria).subscribe(res=>{
        if(res['status'] == 200){
          this.getCategorias();
          this.displayCover = false;
        }
      })
    }
    eliminarProducto(producto){
      this.productService.getCategoryId(this.category_selected).subscribe(res=>{
        let id = res['data'][0]['id'];
        this.productService.eliminarProducto(producto,id,this.category_selected).subscribe(res_2=>{
          this.getProductosFromCategorias(id);
          this.getProductsFromCategorias_Especs(id);
          this.displayCover = false;
          this.cover_mode = '';
        })
      })
    }

    guardarProductos(){
      let valuesChanged = [];
      let originalValues = [];
      /*---------- CHECK IF VALUES ARE REPEATED ------------*/
      for(let i = 0; i<this.productCopy.length;i++){
        for(let x = i+1;x<this.productCopy.length;x++){
          if(this.productCopy[i] == this.productCopy[x]){
            this.form_error = "Nombres no pueden estar repetidos";
            return;
          }
        }
      }
      /*------- CHECK IF VALUES ARE EMPTY --------*/
      for(let product in this.productCopy){
        if(this.productCopy[product] == ''){
          this.form_error = 'Nombres no pueden estar vacios';
          return;
        }
      }
      /*----- DETERMINE WHICH VALUES WERE CHANGED -----*/
      for(let producto in this.productos){
        if(this.productos[producto] != this.productCopy[producto] || this.precios_productos[producto] != this.preciosCopy[producto]){
          let obj = {};
          obj['nombre'] = this.productCopy[producto];
          obj['precio'] = this.preciosCopy[producto];
          valuesChanged.push(obj);
          originalValues.push(this.productos[producto])
          console.log('Producto before: '+this.productos[producto]+', precio: '+this.precios_productos[producto])
          console.log('Producto after: '+this.productCopy[producto]+', precio: '+this.preciosCopy[producto])
        }
      }
      /*----- STORE IN DATABASE ----*/
      if(valuesChanged.length != 0){
        for(let producto in valuesChanged){
          this.productService.editProducto(valuesChanged[producto],originalValues[producto],this.category_selected).subscribe(res=>{
            if(res['status'] == 200){
              this.productService.getCategoryId(this.category_selected).subscribe(res=>{
                let id = res['data'][0]["id"];
                this.getProductosFromCategorias(id);
                this.displayCover = false;
                this.form_error = '';
              })
            }
          })
        }
      }
    }
    guardarCategorias(){
      let valuesChanged = [];
      let originalValues = [];
      /*------ CHECK IF VALUES ARE REPEATED -----*/
      for(let i = 0; i<this.categoriaCopy.length;i++){
        for(let x = i+1;x<this.categoriaCopy.length;x++){
          if(this.categoriaCopy[i] == this.categoriaCopy[x]){
            this.form_error = "Nombres no pueden estar repetidos";
            return;
          }
        }
      }
      /*------ CHECK IF VALUES ARE EMPTY -------*/
      for(let category in this.categoriaCopy){
        if(this.categoriaCopy[category] == ''){
          this.form_error = "Nombres no pueden estar vacios";
          return;
        }
      }
      /*------ DETERMINE WHICH VALUES WERE CHANGED -----*/
      for(let categoria in this.categorias){
        if(this.categorias[categoria] != this.categoriaCopy[categoria]){
          valuesChanged.push(this.categoriaCopy[categoria]);
          originalValues.push(this.categorias[categoria]);
        }
      }
      /*---- STORE IN THE DATABASE ----*/
      for(let category in valuesChanged){
        this.productService.editCategorias(valuesChanged[category],originalValues[category]).subscribe(res=>{
          console.log(res);
        })
      }


    }

    agregarProducto(){
      if(this.productoForm.controls['nombre'].value == ''){
        this.form_error = 'Nombre Invalido';
      }else{
        let nombre = this.productoForm.controls['nombre'].value;
        let precio = this.productoForm.controls['precio'].value;
        precio = parseFloat(precio);
        this.productService.getCategoryId(this.category_selected).subscribe(res=>{
          if(res['status'] == 200){
            let id = res['data'][0]["id"];
            console.log('Id:'+JSON.stringify(res['data'][0]["id"]));
            this.productService.addProduct(nombre,id,precio,this.category_selected).subscribe(res=>{
              if(res['status'] == 200){
                this.getProductosFromCategorias(id);
                this.getProductsFromCategorias_Especs(id);
                this.displayCover = false;
                this.form_error = '';
              }
            })
          }
        })
      }
    }

    agregarCategoria(){
      if(this.categoriaForm.controls['nombre'].value == ''){
        this.form_error = 'Nombre Invalido';
      }else{
        let nombre = this.categoriaForm.controls['nombre'].value;
        this.productService.addCategory(nombre).subscribe(res=>{
          if(res['status'] == 200){
            this.getCategorias();
            this.displayCover = false;
            this.form_error = '';
          }
        })
      }
    }

    cancelarForm(){
      this.getCategorias();
      this.displayCover = false;
      this.form_error = '';
      this.showDesplegable = false;
      this.espec_editar = '';
      this.especForm = this.fb.group({
        id:[''],
        nombre:[''],
        tipo:[''],
        obligatorio:[''],
        precio:['']
      })
    }

    categoriaSelected(categoria,numero){
      this.category_selected = categoria;
      let selected = numero;
      selected++;
      this.getProductosFromCategorias(selected);
      this.getImagenes(selected,1);
      this.getEspecificaciones(selected,1);
    }

    getCategorias(){
      this.categorias = [];
      this.productService.getCategorias().subscribe(res=>{
        if(res['status'] == 200){
            let categoriasObj = res["data"];
            for(let categoria in categoriasObj){
              this.categorias.push(categoriasObj[categoria]['nombre']);
              this.categoria_especificaciones.push(categoriasObj[categoria]['nombre']);
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
              if(producto == '0'){
                this.product_selected = productosObj[producto]['nombre'];
                this.product_id = productosObj[producto]['id'];
              }
              this.productos.push(productosObj[producto]['nombre'])
              this.precios_productos.push(productosObj[producto]['precio'])
              this.precioProduct = productosObj[0]['precio'];
          }
        }
      })
    }

    /*------------------------------------------------
     THIS IS A COPY OF getProductosFromCategorias() BUT TAILORED FOR SPECS ONLY
     ------------------------------------------------- */

     getProductsFromCategorias_Especs(category_id){
      this.productos_especificaciones = [];
      this.productService.getProductosFromCategorias(category_id).subscribe(res=>{
        if(res['status'] == 200){
          let productosObj = res["data"];
          for(let producto in productosObj){
              if(producto == '0'){
                this.especs_producto_selected = productosObj[producto]['nombre'];
                this.especificaciones_productId = productosObj[producto]['id'];
              }
              this.productos_especificaciones.push(productosObj[producto]['nombre']);   
          }
          this.getEspecificaciones(category_id,this.especificaciones_productId);
        }
      })
     }

    getEspecificaciones(category_id,product_id){
      this.especificaciones = [];
      this.productService.getEspecificaciones(category_id,product_id).subscribe(res=>{
        if(res['status'] == 200){
          let especsObj = res["data"];
          for(let espec in especsObj){
            let especObject = {
              id:null,
              nombre : null,
              tipo : null,
              precio : null,
              obligatorio: null
            }
            especObject.id = especsObj[espec]['id'];
            especObject.nombre = especsObj[espec]['nombre'];
            especObject.tipo = especsObj[espec]['tipo'];
            especObject.precio = especsObj[espec]['precio_adicional'];
            especObject.obligatorio = especsObj[espec]['obligatorio'];
            let add = true;
            for(let espec in this.especificaciones){
              if(this.especificaciones[espec]['id'] == especObject.id){
                add = false;
              }
            }
            if(add){
              this.especificaciones.push(especObject);
            }
          }
        }
      })
    }

    getImagenes(category_id,product_id){
      this.imagen_principal = '';
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

    getImagenes_Especs(category_id,product_id){
      this.imagen_principal = '';
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

    /*--------- METHODS FOR IMAGES ---------*/

    changeImgPrincipal(){
      this.changeImg = true;
      this.displayCover = true;
      this.cover_mode = 'change_img';
    }
    openImgMenu(principal = ''){
      this.productService.getImgBank().subscribe(res=>{
        let baseLink = 'https://raw.githubusercontent.com/sergiolombana101/mallas-redes/master/';
        for(let img in res['data']){
          let image = baseLink+res['data'][img]['nombre'];
          this.bank_images.push(image)
        }
        console.log(this.bank_images);
      })
      if(principal == 'secondary'){
        this.secondaryImgBoolean = true;
      }
      else{
        this.secondaryImgBoolean = false;
      }
      this.cover_mode = 'img_bank';
      
    }
    expandImg(image){
      this.image_expand = image;
      this.cover_mode = 'expand_img';
    }
    setImageAsPrincipal(){
      this.productService.getCategoryId(this.especs_categoria_selected).subscribe(res=>{
        let category_id = res['data'][0]['id'];
        let img = this.image_expand.split('/');
        img = img[img.length-1];
        this.productService.setPrincipalImg(img, this.especificaciones_productId, category_id, this.especs_categoria_selected, this.especs_producto_selected).subscribe(res=>{
          this.getImagenes(category_id,this.especificaciones_productId);
          this.cover_mode = '';
          this.displayCover = false;
        })
     })
    }
    changeSecondaryImg(img){
      this.changeImg = true;
      this.displayCover = true;
      this.cover_mode = 'change_secondary_img';
      this.secondary_img = img;
    }
    setSecondaryImg(){
      console.log('Changing '+this.secondary_img+' for '+this.image_expand);
      let current_img = '';
      if(this.secondary_img != null){
        current_img = this.secondary_img.split('/');
        current_img = current_img[current_img.length-1];
      }else{
        current_img = 'null';
      }
      let new_img = this.image_expand.split('/');
      new_img = new_img[new_img.length-1];
      this.productService.getCategoryId(this.especs_categoria_selected).subscribe(res=>{
        let category_id = res['data'][0]['id'];
        this.productService.setSecondaryImg(current_img,new_img,this.especificaciones_productId,category_id,this.especs_categoria_selected,this.especs_producto_selected).subscribe(res=>{
          this.getImagenes(category_id,this.especificaciones_productId);
          this.displayCover = false;
          this.form_error = '';
        })
      })
    }
    agregarImagen(){
      if(this.imagen_principal != ''){
        this.allowPrincipalImage = false;
      }else{
        this.allowPrincipalImage = true;
      }
      if(this.imagenes.length == 4){
        this.cover_mode = 'error_img'
      }else{
        this.cover_mode = 'agregar_imagen';
      }
      this.displayCover = true;
    }

}
