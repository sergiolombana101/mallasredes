const express = require('express');
const path = require('path');
const process = require('process');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const encrypt = require('./encryption');
const fs = require('fs');
const ncp = require('ncp').ncp;
var nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 8080;
//change
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/dist/'));
app.get('/', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});
app.listen(port,()=>{
    console.log('Server started on port: '+port);
})


const connection = mysql.createConnection({
    host:'mallas-redes.net',
    user : 'mallasr_admin',
    password: '3XEN=drNO3P1',
    database: 'mallasr_store',
    port:'3306'
});


connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
})

let response = {
    status : 200,
    data:[],
    message:null,
    token:null
}

setInterval(()=>{
    connection.query('SELECT * FROM usuarios',(err,results)=>{
        if(err){
            console.log(err);
        }else{
        
        }
    })
},200)


/*


var express = require("express");
var bodyParser = require("body-parser");
const process = require('process');
const path = require("path");
const cors = require("cors");
const mysql = require('mysql');
const encrypt = require('./encryption');
const fs = require('fs');
const ncp = require('ncp').ncp;
var nodemailer = require('nodemailer');



var app = express();
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}






//const bodyParser = require('body-parser');
//const express = require('express');
//const app = express();
//const http = require("http").createServer(app);



const connection = mysql.createConnection({
    host:'mallas-redes.net',
    user : 'mallasr_admin',
    password: '3XEN=drNO3P1',
    database: 'mallasr_store',
    port:'3306'
});


connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
})

let response = {
    status : 200,
    data:[],
    message:null,
    token:null
}



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://mallas-redes.herokuapp.com/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


setInterval(()=>{
    connection.query('SELECT * FROM usuarios',(err,results)=>{
        if(err){
            console.log(err);
        }else{
        }
    })
},200)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/dist/'));
app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/index.html'));
    });


//const port = process.env.PORT || 8080;
//http.listen(port, () => {
  //console.log("App listening on port " + port);
//});

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



*/






function createFolder(name){
    let directory = './assets/img/productos/'+name;
    console.log('Creating folder at '+directory)
    if(!fs.existsSync(directory)){
        fs.mkdirSync(directory)
    }
}


function deleteFolder(name,pathBoolean=false){
    let path = (pathBoolean)? name : './assets/img/productos/'+name;
    let isFolder = fs.statSync(path).isDirectory();

    if(isFolder){ // IF IT IS A FOLDER
        /*---GET SUBDIRECTORIES OR FILES ----*/
        let files = fs.readdirSync(path);
        if(files.length > 0){ //IF THE FOLDER HAS CONTENT
            for(let file of files){
                deleteFolder(path+'/'+file,true);
            }
            files = fs.readdirSync(path);
            if(files.length == 0){
                fs.rmdirSync(path);
            }
            return 1;
        }else{ // IF THE FOLDER IS EMPTY
            console.log('DELETING FOLDER')
            fs.rmdirSync(path);
            return 1;
        }
    }else{
        console.log('This is just a file!:'+path);
        fs.unlinkSync(path);
        return 1;
    }
}

/*function deleteFolder(name,pathBoolean=false){
    console.log('Delete folder called with: '+name);
    let path = (pathBoolean)? name : './src/assets/img/productos/'+name;
    removeFolderContents(path);
    setTimeout(()=>{
        let path = './src/assets/img/productos/'+name;
        if (fs.existsSync(path)) {
            const files = fs.readdirSync(path)
        
            if (files.length > 0) {
            files.forEach(function(filename) {
                if (fs.statSync(path + "/" + filename).isDirectory()) {
                deleteFolder(path + "/" + filename,true);
                } else {
                fs.unlinkSync(path + "/" + filename)
                }
            })
            fs.rmdirSync(path)
            //console.log('Folder removed');
            } else {
            fs.rmdirSync(path)
            //console.log('Folder removed');
            }
        } else {
            console.log("Directory path not found.")
        }
    },1000)
}*/

/*function removeFolderContents(directory){
    console.log('Remove Folder contents: '+directory);
    if(fs.statSync(directory).isDirectory()){
    const files = fs.readdirSync(directory);
    if(files.length > 0){
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          const files = fs.readdirSync(directory);
          if(files.length > 0){
              files.forEach(function(folder){
                  removeFolderContents(directory+'/'+folder);
              })
          }
          if(fs.statSync(path.join(directory,file)).isDirectory()){
              deleteFolder(directory+'/'+file,true);
          }else{
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
                console.log('Files removed');
            });
          }
        }
      });
    }else{
        return;
    }
}else{
    return;
}
}*/

function editFolder(new_name,old_name){
    const currPath = './assets/img/productos/'+old_name;
    const newPath = './assets/img/productos/'+new_name;

    console.log('Editing folder: '+new_name+' '+old_name);
    ncp.limit = 16;

    if(new_name != old_name){
        createFolder(new_name);
        ncp(currPath,newPath,function(err){
            if(err){return console.err(err);}
            console.log('Items copied');
            deleteFolder(old_name);
            setInterval(()=>{
                let path = './assets/img/productos/'+old_name;
                if(fs.existsSync(path)){
                    let files = fs.readdirSync(path);
                    if(files.length == 0){
                        fs.rmdirSync(path);
                    }
                }
            },200)

            //deleteFolder(old_name);
        })
    }
    

    /*if(new_name != old_name){ // IF THE FOLDER NAME DID CHANGE
        createFolder(new_name);
        fs.copyFile(currPath,newPath,(err)=>{
            if(err) throw err;
            deleteFolder(old_name);
        })
    }
*/
}
function editProductFolder(category,new_name,old_name){
    const currPath = './assets/img/productos/'+category+'/'+old_name;
    const newPath = './assets/img/productos/'+category+'/'+new_name;

    fs.rename(currPath, newPath, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Successfully renamed the directory.")
        }
      })

}



//API ENDPOINTS


app.get("/api/categorias", function(req,res){
 connection.query(
     'SELECT * FROM categorias',
     (err,resultados)=>{
        if(err){
            console.log(err);
        }else{
            if(resultados.length == 0){
                response.data = []
                response.message = 'No hay Categorias';
                response.status = 401;
            }else{
                response.status = 200;
                response.message = 'Categorias Obtenidas';
                response.data = resultados;
            }
            res.status(200).json(response);
        }
    }
 )
})

app.get("/api/productosFrom/:categoria", function(req,res){
    connection.query(
        'SELECT * FROM productos WHERE categoria=?',
        [req.params.categoria],
        (err,resultados)=>{
           if(err){
               console.log(err);
           }else{
               if(resultados.length == 0){
                    response.data = []
                   response.message = 'No hay Categorias';
                   response.status = 401;
               }else{
                   response.status = 200;
                   response.message = 'Productos Obtenidos';
                   response.data = resultados;
               }
               res.status(200).json(response);
           }
       }
    )
   })

app.get("/api/getCatId/:nombre",(req,res)=>{
    connection.query(
        'SELECT id FROM categorias WHERE nombre=?',
        [req.params.nombre],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                if(resultados.length >0){
                    response.data = resultados;
                    response.message = "Categoria Id obtenida";
                    response.status = 200;
                }
            }
            res.status(200).json(response);
        }
    )
})
app.get("/api/getProductId/:nombre",(req,res)=>{
    connection.query(
        'SELECT id FROM productos WHERE nombre=?',
        [req.params.nombre],    
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                if(resultados.length >0){
                    response.data = resultados;
                    response.message = "Producto Id obtenida";
                    response.status = 200;
                }
            }
            res.status(200).json(response);
        }
    )
})
app.post("/api/auth",(req,res)=>{
    connection.query(
        'SELECT * FROM usuarios WHERE Correo=?',
        [req.body[0]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                if(resultados.length == 0){
                    response.data = []
                    response.message = 'Usuario no existe';
                    response.status = 401;
                }else{
                    if(!encrypt.encrypt.comparePasswords(resultados[0]["Clave"],req.body[1])){
                        response.status = 401;
                        response.message = 'Clave Incorrecta'
                    }else if(encrypt.encrypt.comparePasswords(resultados[0]["Clave"],req.body[1])){
                        response.status = 200;
                        response.message = 'Autenticado';
                        response.data = resultados[0];
                    }
                }
                res.status(200).json(response);
            }
        }
        )
})

app.get("/api/getEspecId/:product_id/:espec_nombre",(req,res)=>{
    connection.query(
        'SELECT id FROM especificaciones WHERE producto_id = ? AND nombre = ?',
        [req.params.product_id, req.params.espec_nombre],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = 'Espec no existe';
                response.data = resultados;
            }
            res.status(200).json(response);
        }
    )
})

app.get("/api/getOpciones/:product_id/:espec",(req,res)=>{
    connection.query(
        'SELECT nombre FROM opciones WHERE product_id=? AND espec_id=?',
        [req.params.product_id,req.params.espec],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = 'Opciones obtenidas';
                response.data = resultados;
            }
            res.status(200).json(response);
        }
    )
})

app.post("/api/editPrice",(req,res)=>{
    connection.query(
        'UPDATE productos SET precio = ? WHERE id= ?',
        [req.body[1],req.body[0]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Precio Editado";
                response.data = [];
            }
            res.status(200).json(response);
        }
    )
})

app.post("/api/editEspec",(req,res)=>{
    let query = 'UPDATE especificaciones SET '+req.body[0];
    connection.query(
        query+' = ? WHERE nombre = ? AND producto_id = ?',
        [req.body[1],req.body[2],req.body[3]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Espec editado";
                response.data = [];
            }
            res.status(200).json(response);
        }
    )
})


app.post("/api/addCategory",(req,res)=>{
    connection.query(
        `INSERT INTO categorias VALUES (?,?)`,
        [null,req.body],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Categoria Insertada";
                response.data = [];
               //createFolder(req.body)
            }
            res.status(200).json(response);
        }
    )
})

app.post("/api/addProduct",(req,res)=>{
    connection.query(
        `INSERT INTO productos VALUES (?,?,?,?)`,
        [null,req.body[0],req.body[1],req.body[2]],
        (err,rresultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Producto Insertada";
                response.data = [];
                //createFolder(req.body[3]+'/'+req.body[0])
            }
            res.status(200).json(response);
        }
    )
})

app.post("/api/editCategory",(req,res)=>{
    connection.query(
        'UPDATE categorias SET nombre = ? WHERE nombre = ?',
        [req.body[0],req.body[1]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Categoria editada";
                response.data = [];
               // editFolder(req.body[0],req.body[1]);
            }
            res.status(200).json(response);
        }
    )
})

app.post("/api/editProduct",(req,res)=>{
    connection.query(
        'UPDATE productos SET nombre = ?, precio = ? WHERE nombre = ?',
        [req.body[0]['nombre'],req.body[0]['precio'],req.body[1]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Producto editad";
                response.data = [];
               // editProductFolder(req.body[2],req.body[0]['nombre'],req.body[1]);
            }
            res.status(200).json(response);
        }
    )
})

app.post("/api/deleteProduct",(req,res)=>{
    connection.query(
        `DELETE FROM productos WHERE nombre = ? AND categoria = ?`,
        [req.body[0],req.body[1]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Producto Eliminado";
                response.data = [];
                let path = req.body[2]+'/'+req.body[0];
                //deleteFolder(path)
            }
            res.status(200).json(response);
        }
    )
})

app.post('/api/deleteImgs',(req,res)=>{
    connection.query(
        'DELETE FROM imagenes WHERE producto_id = ?',
        [req.body[0]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Imagenes Eliminadas";
                response.data = [];
            }
            res.status(200).json(response);
        }
    )
})

app.post("/api/deleteCategory",(req,res)=>{
    connection.query(
        `DELETE FROM categorias WHERE nombre = ?`,
        [req.body],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = "Categoria Eliminada";
                response.data = [];
               // deleteFolder(req.body)
            }
            res.status(200).json(response);
        }
    )
})

app.get("/api/especs/:categoria_id/:product_id",(req,res)=>{
    connection.query(
        "SELECT id,nombre,tipo,precio_adicional,obligatorio FROM especificaciones WHERE categoria_id=? AND producto_id=?",
        [req.params.categoria_id,req.params.product_id],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                if(resultados.length == 0){
                    response.data = []
                    response.message = 'No hay Especificaciones';
                    response.status = 401;
                }else{
                    response.status = 200;
                    response.message = 'Especificaciones obtenidas';
                    response.data = resultados;
                }
                res.status(200).json(response);
            }
        }
    )
})

app.get("/api/imagenes/:categoria_id/:producto_id",(req,res)=>{
    connection.query(
        "SELECT nombre,categoria_id,producto_id,principal FROM imagenes WHERE categoria_id=? AND producto_id=?",
        [req.params.categoria_id,req.params.producto_id],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                if(resultados.length == 0){
                    response.data = []
                    response.message = 'No hay Imagenes';
                    response.status = 401;
                }else{
                    response.status = 200;
                    response.message = 'Imagenes Obtenidas';
                    response.data = resultados;
                }
                res.status(200).json(response);
            }
        }
    )
})

app.post('/api/addOpcion',(req,res)=>{
    console.log('Opcion called');
    connection.query(
        "INSERT INTO opciones VALUES (?,?,?,?)",
        [null,req.body[0],req.body[1],req.body[2]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                console.log('Opcion agregada')
                response.status = 200;
                response.message = 'Opcion agregada';
                response.data = resultados;
            }
            res.status(200).json(response);
        }
    )
})

app.post('/api/eliminarOpcion',(req,res)=>{
    connection.query(
        `DELETE FROM opciones WHERE nombre = ? AND espec_id = ? AND product_id = ?`,
        [req.body[0],req.body[1],req.body[2]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = 'Opcion eliminada';
                response.data = resultados;
            }
            res.status(200).json(response);
        }
    )
})
app.post('/api/addEspec',(req,res)=>{
    connection.query(
        'INSERT INTO especificaciones VALUES (?,?,?,?,?,?,?)',
        [null,req.body[0][0],req.body[0][1],req.body[0][3],req.body[0][2],req.body[1],req.body[2]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = 'Espec agregado';
                response.data = resultados['insertId'];
            }
            res.status(200).json(response);
        }
    )
})

app.get('/api/getBank',async (req,res)=>{
    connection.query(
        'SELECT nombre FROM banco',
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.message = 'Banco obtenido';
                response.data = resultados;
                response.status = 200;
            }
            res.status(200).json(response);
        }
    )
    //let names = await getBankImgNames().then(response=>{res.status(200).json(response)});
})

app.post('/api/setPrincipalImg',(req,res)=>{
    let first_time = false;
    let old_img_name = '';
    connection.query(
        'SELECT nombre FROM imagenes WHERE categoria_id = ? AND producto_id = ? and principal = 1',
        [req.body[2],req.body[1]],
        (err,resultados)=>{
            if(err){
                console.log(err);
                response.status = 401;
            }else{
                console.log(resultados.length)
                if(resultados.length == []){
                    first_time = true;
                }else{
                    old_img_name = resultados[0]['nombre'];
                }
            }
        }
        
    )
    if(!first_time){
        connection.query(
            'DELETE FROM imagenes WHERE categoria_id = ? AND producto_id = ? and principal = 1',
            [req.body[2],req.body[1]],
            (err,resultados)=>{
                if(err){
                    console.log(err);
                    response.status = 401;
                }else{

                }
            })
    }
    connection.query(
        'INSERT INTO imagenes VALUES (?,?,?,?,?)',
        [null,req.body[0],req.body[2],req.body[1],1],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.message = 'Imagen principal cambiada';
                response.status = 200;
                response.data = [];
                //console.log(resultados);
               // (!first_time)? deleteImg(old_img_name,req.body[0],req.body[3],req.body[4]) : copyImg(req.body[0],req.body[3],req.body[4]);
            }
                res.status(200).json(response);
            }
        )
    })



app.post('/api/setSecondaryImg',(req,res)=>{
    let first_time = false;
    connection.query(
        'SELECT nombre FROM imagenes WHERE categoria_id = ? AND producto_id = ? and nombre = ?',
        [req.body[3],req.body[2],req.body[0]],
        (err,resultados)=>{
            if(err){
                console.log(err);
                response.status = 401;
            }else{
                console.log('Len: '+resultados.length)
                if(resultados.length == 0){
                    first_time = true;
                }else{
                    first_time = false;
                }
            }
        }
        
    )
    setTimeout(()=>{
        console.log('Bool: '+first_time);
        if(!first_time){
        connection.query(
            'DELETE FROM imagenes WHERE categoria_id = ? AND producto_id = ? and nombre = ?',
            [req.body[3],req.body[2],req.body[0]],
            (err,resultados)=>{
                if(err){
                    console.log(err);
                    response.status = 401;
                }else{
                }
            }
        )
        }else{
            console.log('Inserting');
            connection.query(
                'INSERT INTO imagenes VALUES (?,?,?,?,?)',
                [null,req.body[1],req.body[3],req.body[2],0],
                (err,resultados)=>{
                    if(err){
                        console.log(err);
                    }else{
                        response.message = 'Imagen secondaria cambiada';
                        response.status = 200;
                        response.data = [];
                        //(!first_time)? deleteImg(req.body[0],req.body[1],req.bpdy[4],req.body[5]) : copyImg(req.body[1],req.body[4],req.body[5]);
                    }
                    res.status(200).json(response);
                }
            )
        }
    },200)
})

app.get('/api/getPprecio/:product_id',(req,res)=>{
    connection.query(
        'SELECT precio FROM productos WHERE id = ?',
        [req.params.product_id],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.data = resultados;
                response.message = 'Precio obtenido';
            }
            res.status(200).json(response)
        }
    )
})

app.get('/api/getDesc/:product_id',(req,res)=>{
    connection.query(
        'SELECT descripcion FROM descripciones WHERE product_id = ?',
        [req.params.product_id],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                response.status = 200;
                response.message = 'Descripcion obtenida';
                response.data = resultados;
            }
            res.status(200).json(response);
        }
    )
})

app.post('/api/addDesc',(req,res)=>{
    connection.query(
        'SELECT * FROM descripciones WHERE product_id = ?',
        [req.body[0]],
        (err,resultados)=>{
            if(err){
                console.log(err);
            }else{
                if(resultados.length == 0){
                    connection.query(
                        'INSERT INTO descripciones VALUES (?,?,?)',
                        [null,req.body[0],req.body[1]],
                        (err,resultados)=>{
                            if(err){
                                console.log(err);
                            }
                            else{
                                response.data = [];
                                response.status = 200;
                                response.message = 'Descripcion insertada';
                            }
                            res.status(200).json(response);
                        }
                    )
                }else{
                    connection.query(
                        'UPDATE descripciones SET descripcion = ? WHERE product_id= ?',
                        [req.body[1],req.body[0]],
                        (err,resultados)=>{
                            if(err){
                                console.log(err);
                            }else{
                                response.data = [];
                                response.status = 200;
                                response.message = 'Descripcion insertada';
                            }
                            res.status(200).json(response);
                        }
                    )
                }
            }
        }

    )
})

app.post('/api/enviarEmail',(req,res)=>{
    console.log(req.body[0])
    sendEmail(req.body[0])
    //sendmail({from:})
})


function deleteImg(old_img_name,new_img_name,categoria_name,producto_name){
    let path = './assets/img/productos/'+categoria_name+'/'+producto_name+'/'+old_img_name;
    fs.unlinkSync(path)
    let old_path = './assets/img/banco/'+new_img_name;
    let new_Path = './assets/img/productos/'+categoria_name+'/'+producto_name+'/'+new_img_name;
    // destination.txt will be created or overwritten by default.
    fs.copyFile(old_path, new_Path, (err) => {
        if (err) throw err;
    });
}
function copyImg(new_img,categoria_name,producto_name){
    console.log('Copying');
    let old_path = './assets/img/banco/'+new_img;
    let new_Path = './assets/img/productos/'+categoria_name+'/'+producto_name+'/'+new_img;
    fs.copyFile(old_path, new_Path, (err) => {
        if (err) throw err;
    });
}


function getBankImgNames(){
    return new Promise((resolve,reject)=>{
        let images = [];
        let directoryPath = './assets/img/banco';
        fs.readdir(directoryPath,function(err,files){
            if(err){
                return images;
            }
            files.forEach(function(file){
                images.push(file);
            })
        })
        setTimeout(()=>{
            resolve(images);
        },200)
    })
}


var nodemailer = require('nodemailer');

function sendEmail(values){
    console.log(values[1])
    var transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'contactanosmallasredes@gmail.com',
            pass: 'mallas123'
        }
      });
    var mailOptions = {
        from:"contactanosmallasredes@gmail.com",
        to: "lombanahnos@mallas-redes.net",
        subject: 'Mensaje de Cliente',
        text : 'Has recibido un mensaje de un cliente desde mallas-redes.net:\n'+
               '\nNombre: '+values[0]+
               '\nCorreo: '+values[1]+
               '\nTelefono: '+values[2]+
               '\nMensaje: '+values[3]+
               '\n\nEste es un mensaje personalizado para manejar la pagina de mallas-redes.net. Por favor no responder a este correo'
  
    }

    //log file logic to be decided for send mail so info isn't saved to console

    transporter.sendMail(mailOptions, (error,info)=>{
        console.log('sending');
        if(error){
            console.log(error);
        }else{
            console.log('Message sent')
        }
    });
}