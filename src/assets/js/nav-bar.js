
if(localStorage.getItem("loaded") == "true" && localStorage.getItem('component') != "home" && localStorage.getItem('component') != "login"){
    let nav_container = document.getElementById("nav-bar");
    let nav_elements = nav_container.children;
    let nav_lines = document.getElementsByClassName("nav-line");

    let component = localStorage.getItem("component");
    switch (component){
        case "home":
            nav_lines[0].style.transition = "1s";
            nav_lines[0].style.left = "4%";
            nav_lines[0].children[0].style.width = "54%";
            nav_lines[0].children[0].style.transition = "2s";
            break;
        case "products":
            nav_lines[0].style.transition = "1s";
            nav_lines[0].style.left = ".5%"
            nav_lines[0].children[0].style.width = "102%";
            nav_lines[0].children[0].style.transition = "2s";
            break;
        case "clientes":
            nav_lines[0].style.transition = "1s";
            nav_lines[0].style.left = "10.5%"
            nav_lines[0].children[0].style.width = "75%";
            nav_lines[0].children[0].style.transition = "2s";
            break;
        case "contact":
            nav_lines[0].style.transition = "1s";
            nav_lines[0].style.left = "19%"
            nav_lines[0].children[0].style.width = "118%";
            nav_lines[0].children[0].style.transition = "2s";
            break;
        default:
            nav_lines[0].style.transition = "1s";
            nav_lines[0].style.left = "19%"
            nav_lines[0].children[0].style.width = "118%";
            nav_lines[0].children[0].style.transition = "2s";
            break;
    }
    


    for(let x = 0; x<nav_elements.length;x++){
        nav_elements[x].onmouseover = ()=>{
            component = localStorage.getItem("component");
            switch(nav_elements[x].innerHTML){
                case "Inicio":
                    nav_lines[0].style.transition = "1s";
                    if(component == "home"){
                        nav_lines[0].style.left = "4%"
                    }else{
                        nav_lines[0].style.left = "-6.5%"
                    }
                    nav_lines[0].children[0].style.width = "54%";
                    break;
                case "Productos":
                    nav_lines[0].style.transition = "1s";
                    if(component == "home"){
                        nav_lines[0].style.left = "10.4%"
                    }else{
                        nav_lines[0].style.left = "1.5%"
                    }
                    nav_lines[0].children[0].style.width = "97%";   
                    break;
                case "Clientes":
                    nav_lines[0].style.transition = "1s";
                    if(component == "home"){
                        nav_lines[0].style.left = "19.5%"
                    }else{
                        nav_lines[0].style.left = "10.5%"
                    }
                    nav_lines[0].children[0].style.width = "75%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
                case "Contáctanos":
                    nav_lines[0].style.transition = "1s";
                    if(component == "home"){
                        nav_lines[0].style.left = "27.2%"
                    }else{
                        nav_lines[0].style.left = "19%"
                    }
                    nav_lines[0].children[0].style.width = "118%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
                default:
                    nav_lines[0].style.transition = "1s";
                    if(component == "home"){
                        nav_lines[0].style.left = "27.2%"
                    }else{
                        nav_lines[0].style.left = "19%"
                    }
                    nav_lines[0].children[0].style.width = "118%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
            

            }
        }

        nav_elements[x].onmouseleave = () => {
            switch (component){
                case "home":
                    nav_lines[0].style.transition = "1s";
                    nav_lines[0].style.left = "4%";
                    nav_lines[0].children[0].style.width = "54%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
                case "products":
                    nav_lines[0].style.transition = "1s";
                    nav_lines[0].style.left = ".5%"
                    nav_lines[0].children[0].style.width = "102%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
                case "clientes":
                    nav_lines[0].style.transition = "1s";
                    nav_lines[0].style.left = "10.5%"
                    nav_lines[0].children[0].style.width = "75%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
                case "contact":
                    nav_lines[0].style.transition = "1s";
                    nav_lines[0].style.left = "19%"
                    nav_lines[0].children[0].style.width = "118%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
                default:
                    nav_lines[0].style.transition = "1s";
                    nav_lines[0].style.left = "19%"
                    nav_lines[0].children[0].style.width = "118%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
            }
        }
    }
}
