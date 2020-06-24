if(localStorage.getItem("loaded") == "true" && localStorage.getItem("component") == "login"){
    let acceder_btn = document.getElementsByClassName('acceder-button')[0];
    let correo_container = document.getElementsByClassName('correo-container')[0];
    let contrasena_container = document.getElementsByClassName('contrasena-container')[0];
    
    acceder_btn.onmouseover = () => {
        acceder_btn.style.transition = "2s";    
        acceder_btn.style.backgroundColor = '#A3917E';
    }
    acceder_btn.onmouseout = () => { 
        acceder_btn.style.backgroundColor = '#02111B';
    }
    correo_container.children[1].onfocus = () => {
        correo_container.children[0].style.transition = "1s";
        correo_container.children[0].style.top = "-5%";
        correo_container.children[0].style.fontSize = ".8vw";
    }
    correo_container.children[1].onblur = () => {
        if(correo_container.children[1].value == ''){
            correo_container.children[0].style.transition = "1s";
            correo_container.children[0].style.top = "38%";
            correo_container.children[0].style.fontSize = "1vw";
        }
    }
    contrasena_container.children[1].onfocus = () => {
        contrasena_container.children[0].style.transition = "1s";
        contrasena_container.children[0].style.top = "0%";
        contrasena_container.children[0].style.fontSize = ".8vw";
    }
    contrasena_container.children[1].onblur = () => {
        if(contrasena_container.children[1].value == ''){
            contrasena_container.children[0].style.transition = "1s";
            contrasena_container.children[0].style.top = "38%";
            contrasena_container.children[0].style.fontSize = "1vw";
        }
    }
}
