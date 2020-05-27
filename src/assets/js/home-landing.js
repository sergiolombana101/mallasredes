if(localStorage.getItem("loaded") == "true" && localStorage.getItem('component') == "home"){

    localStorage.setItem("landing-section","seguridad"); //This is the variable that I am going to use to reference which image is being shown

    let product_title_container = document.getElementsByClassName("product-title-container");
    let product_title = document.getElementsByClassName("product-title")


    let flecha_iz_btn = document.getElementsByClassName("flecha-izquierda-btn");
    let flecha_de_btn = document.getElementsByClassName("flecha-derecha-btn");

    let flecha_de_container = document.getElementsByClassName("right-slide-btn");
    let flecha_iz_container = document.getElementsByClassName("left-slide-btn");

    flecha_de_btn[0].onmouseover = () => {
        let flecha_container = document.getElementsByClassName("right-slide-btn");
        flecha_container[0].style.transition = "1s";
        flecha_container[0].style.backgroundColor = "#F57506";
    }

    flecha_de_btn[0].onmouseleave = () => {
      
        let flecha_container = document.getElementsByClassName("right-slide-btn");
        flecha_container[0].style.transition = "1s";
        flecha_container[0].style.backgroundColor = "#C5B5A5";
    }

    flecha_de_container[0].onclick = () => {
        let blob_imageBackground = document.getElementsByClassName('blob-image')[0];
        let section = localStorage.getItem("landing-section");

        /* ---------------------------------------------
            DEPENDING ON WHICH SECTION IS BEING DISPLAYED I WANT TO CHANGE THE
            BACKGROUND IMAGE
        ------------------------------------------------ */
        switch(section){
            case "seguridad":
                blob_imageBackground.setAttribute("href","../../../assets/img/wallpapers/soportes.png")
                replace_img = "url('soportes.png')";
                localStorage.setItem("landing-section","soportes");
                break;
            case "soportes":
                blob_imageBackground.setAttribute("href","../../../assets/img/deportes.png")
                replace_img = "url('../../../assets/img/deportes.png')";
                localStorage.setItem("landing-section","deportes");
                break;
            case "deportes":
                blob_imageBackground.setAttribute("href","../../../assets/img/wallpapers/background1.png")
                replace_img = "url('../../../assets/img/wallpapers/background1.png')";
                localStorage.setItem("landing-section","seguridad");
                break;
        }
        /*----------------------------------------------
            THE CIRCLES HAVE A DEFAULT DISPLAY OF NONE
            SO I AM CHANGING THE DISPLAY TO INITIAL
        ------------------------------------------------ */
        let g = document.getElementsByClassName('g')[0];
        for(let i = 0; i<g.childNodes.length;i++){
            if(g.childNodes[i].classList[1] == "derecha"){
                g.childNodes[i].style.display = 'initial';
            }
        }
        /*----------------------------------------------
            AFTER THE CIRCLES ANIMATION IS COMPLETE, IT IS
            GOING TO FADE AWAY. SO I NEED TO CHANGE THE BODY
            BACKGROUND TO THE IMAGE FROM THE TRANSITION.
        ------------------------------------------------ */
        setTimeout(()=>{
            document.getElementsByClassName('landing-body')[0].style.backgroundImage = replace_img;
            for(let i = 0; i<g.childNodes.length;i++){
                if(g.childNodes[i].classList[1] == "derecha"){
                    g.childNodes[i].style.display = 'none';
                }
            }
        },2000)
        /*----------------------------------------------\
            THIS SEGMENT IS JUST CHANGING THE PRODUCT TITLE
            TEXT TO WHATEVER THE NEXT SECTION IS
        ------------------------------------------------ */
        setTimeout(()=>{
            product_title_container[0].style.transition = "1s opacity";
            product_title_container[0].style.opacity = '0';
            setTimeout(()=>{
                switch(section){
                    case "seguridad":
                        product_title[0].innerHTML = "SOPORTES Y ESTRUCTURAS";
                        break;
                    case "soportes":
                        product_title[0].innerHTML = "MALLAS DEPORTIVAS";
                        break;
                    case "deportes":
                        product_title[0].innerHTML = "MALLAS DE SEGURIDAD";
                        break;
                }
                product_title_container[0].style.opacity = '1';
            },1200)
        },200)
      

    }

    flecha_iz_btn[0].onmouseover = () => {
        let flecha_container = document.getElementsByClassName("left-slide-btn");
        flecha_container[0].style.transition = "1s";
        flecha_container[0].style.backgroundColor = "#F57506";
    }

    flecha_iz_btn[0].onmouseleave = () => {
      
        let flecha_container = document.getElementsByClassName("left-slide-btn");
        flecha_container[0].style.transition = "1s";
        flecha_container[0].style.backgroundColor = "#C5B5A5";
    }

    flecha_iz_container[0].onclick = () => {
        let blob_imageBackground = document.getElementsByClassName('blob-image')[0];
        let section = localStorage.getItem("landing-section");

        /* ---------------------------------------------
            DEPENDING ON WHICH SECTION IS BEING DISPLAYED I WANT TO CHANGE THE
            BACKGROUND IMAGE
        ------------------------------------------------ */
        switch(section){
            case "seguridad":
                blob_imageBackground.setAttribute("href","../../../assets/img/deportes.png")
                replace_img = "url('../../../assets/img/deportes.png')";
                localStorage.setItem("landing-section","deportes");
                break;
            case "soportes":
                blob_imageBackground.setAttribute("href","../../../assets/img/wallpapers/background1.png")
                replace_img = "url('../../../assets/img/wallpapers/background1.png')";
                localStorage.setItem("landing-section","seguridad");
                break;
            case "deportes":
                blob_imageBackground.setAttribute("href","../../../assets/img/wallpapers/soportes.png")
                replace_img = "url('soportes.png')";
                localStorage.setItem("landing-section","soportes");
                break;
        }
        /*----------------------------------------------
            THE CIRCLES HAVE A DEFAULT DISPLAY OF NONE
            SO I AM CHANGING THE DISPLAY TO INITIAL
        ------------------------------------------------ */
        let g = document.getElementsByClassName('g')[0];
        for(let i = 0; i<g.childNodes.length;i++){
            if(g.childNodes[i].classList[1] == "izquierda"){
                g.childNodes[i].style.display = 'initial';
            }
        }
        /*----------------------------------------------
            AFTER THE CIRCLES ANIMATION IS COMPLETE, IT IS
            GOING TO FADE AWAY. SO I NEED TO CHANGE THE BODY
            BACKGROUND TO THE IMAGE FROM THE TRANSITION.
        ------------------------------------------------ */
        setTimeout(()=>{
            document.getElementsByClassName('landing-body')[0].style.backgroundImage = replace_img;
            for(let i = 0; i<g.childNodes.length;i++){
                if(g.childNodes[i].classList[1] == "izquierda"){
                    g.childNodes[i].style.display = 'none';
                }
            }
        },2000)
        /*----------------------------------------------\
            THIS SEGMENT IS JUST CHANGING THE PRODUCT TITLE
            TEXT TO WHATEVER THE NEXT SECTION IS
        ------------------------------------------------ */
        setTimeout(()=>{
            product_title_container[0].style.transition = "1s opacity";
            product_title_container[0].style.opacity = '0';
            setTimeout(()=>{
                switch(section){
                    case "seguridad":
                        product_title[0].innerHTML = "MALLAS DEPORTIVAS";
                        break;
                    case "soportes":
                        product_title[0].innerHTML = "MALLAS DE SEGURIDAD";
                        break;
                    case "deportes":
                        product_title[0].innerHTML = "SOPORTES Y ESTRUCTURAS";
                        break;
                }
                product_title_container[0].style.opacity = '1';
            },1200)
        },200)
      

    }

    /*-----------------------------------------------------
        CODE FOR COMPRAR BUTTON
    ------------------------------------------------------- */

    let button_container = document.getElementsByClassName('comprar-btn-div')[0];
    let button = document.getElementsByClassName('comprar-btn')[0];

    button_container.onmouseover = () => {
        button_container.style.transition = "2s";
        button_container.style.backgroundColor = "#67563F";
        button_container.style.height = "4.3em";
        button_container.style.width = "9.2em";
        button.style.transition = "2s";
        button.style.fontSize = "1.6vw";
    }
    button_container.onmouseleave = () => {
        button_container.style.backgroundColor = "#C5B5A5";
        button_container.style.height = "4em";
        button_container.style.width = "9em";
        button.style.fontSize = "1.5vw";
    }

    /*-----------------------------------------------------
        CODE FOR MENU BUTTONS
    ------------------------------------------------------- */

    let menu_options = document.getElementsByClassName('inicio-option');
    let options_text = [];
    let options_img = [];

    for(let option = 0;option<menu_options.length;option++){
        options_text.push(menu_options[option].children[1]);
        options_img.push(menu_options[option].children[0]);
    }

    for(let text = 0; text < options_text.length; text++){
        options_text[text].onmouseover = () => {
            let image_to_animate = options_img[text];
            image_to_animate.style.transition = "2s";
            image_to_animate.style.transform = "rotate(360deg)";
            options_text[text].style.color = "#C5B5A5";
        }
        options_text[text].onmouseleave = () => {
            options_text[text].style.color = "white";
            image_to_animate.style.transform = "rotate(-360deg)";
        }
    }


}