
window.onload = () => {
    console.log("loaded");
    let nav_container = document.getElementById("nav-bar");
    let nav_elements = nav_container.children;
    let nav_lines = document.getElementsByClassName("nav-line");

    for(let x = 0; x<nav_elements.length;x++){
        nav_elements[x].onmouseover = ()=>{
            console.log("Mouse over")
            switch(nav_elements[x].innerHTML){
                case "Inicio":
                    nav_lines[0].style.left = "5.5%";
                    nav_lines[0].children[0].style.width = "45%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
                case "Productos":
                    nav_lines[0].style.left = "10.9%";
                    nav_lines[0].style.transition = "1s";
                    nav_lines[0].children[0].style.width = "77%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
                case "Clientes":
                    nav_lines[0].style.left = "18.7%";
                    nav_lines[0].style.transition = "1s";
                    nav_lines[0].children[0].style.width = "60%";
                    nav_lines[0].children[0].style.transition = "2s";
                    break;
            

            }
        }

        nav_elements[x].onmouseleave = () => {
            nav_lines[0].style.left = "4.8%";
            nav_lines[0].children[0].style.width = "45%";
            nav_lines[0].children[0].style.transition = "2s";
        }
    }

}


