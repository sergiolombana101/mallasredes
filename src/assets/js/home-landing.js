if(localStorage.getItem("loaded") == "true" && localStorage.getItem('component') == "home"){

    if(sessionStorage.getItem('visitCount') == "1"){
        let animContainer = document.getElementsByClassName('video')[0];
        animContainer.removeChild(animContainer.childNodes[0]);
        let img = document.createElement('img');
        img.src = "../../../assets//img/animation1.svg";
        animContainer.appendChild(img);
        let bar = document.getElementsByClassName('bar')[0];
        let percentage = document.getElementById('percentage');
        bar.style.width = '7em';
        let count = 0;
        let percentageCount = setInterval(()=>{
            if(count == 99){
                clearInterval(percentageCount);
            }
            count++;
            percentage.innerHTML = count;
        },50)
    }
    

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
                replace_img = "url('../../../assets/img/wallpapers/soportes.png')";
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
            IM SETTING THE CORRDINATES FOR THE CIRCLES
            FOR THE ANIMATION
        ------------------------------------------------ */
        let g = document.getElementsByClassName('g')[0];
        for(let i = 0; i<g.childNodes.length;i++){
            if(g.childNodes[i].classList[1] == "derecha"){
                g.childNodes[i].style.opacity = '1';
            }
        }
        let left_circle = document.getElementById('left-circle');
        left_circle.style.transition = '4s';
        left_circle.style.position = 'absolute';
        left_circle.style.transform = 'translateX(45em)';

        let right_circle = document.getElementById('right-circle');
        right_circle.style.transition = '4s';
        right_circle.style.position = 'absolute';
        right_circle.style.transform = 'translateX(-45em)';

        let middle_circle = document.getElementById('middle-circle');
        middle_circle.style.transition = '4s';
        middle_circle.setAttribute('r','1000');
        /*----------------------------------------------
            AFTER THE CIRCLES ANIMATION IS COMPLETE, IT IS
            GOING TO FADE AWAY. SO I NEED TO CHANGE THE BODY
            BACKGROUND TO THE IMAGE FROM THE TRANSITION.
        ------------------------------------------------ */
        setTimeout(()=>{
            document.getElementsByClassName('landing-body')[0].style.backgroundImage = replace_img;
            /*-------------------------------------
                IM SETTING THE DEFAULT ATTRIBUTES BACK AGAIN SO
                I CAN MAKE THE ANIMATION ON THE NEXT SLIDE
            --------------------------------------- */
            for(let i = 0; i<g.childNodes.length;i++){
                if(g.childNodes[i].classList[1] == "derecha"){
                    switch(g.childNodes[i].id){
                        case "left-circle":
                            g.childNodes[i].style.transform = 'translateX(-45em)';
                            break;
                        case "right-circle":
                            g.childNodes[i].style.transform = 'translateX(45em)';
                            break;
                        case "middle-circle":
                            g.childNodes[i].setAttribute('r','40');
                            break;
                    }
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
                replace_img = "url('../../../assets/img/wallpapers/soportes.png')";
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
                g.childNodes[i].style.opacity = '1';
            }
        }
        let left_circle = document.getElementById('left-circle2');
        left_circle.style.transition = '4s';
        left_circle.style.position = 'absolute';
        left_circle.style.transform = 'translateX(45em)';

        let right_circle = document.getElementById('right-circle2');
        right_circle.style.transition = '4s';
        right_circle.style.position = 'absolute';
        right_circle.style.transform = 'translateX(-45em)';

        let middle_circle = document.getElementById('middle-circle2');
        middle_circle.style.transition = '4s';
        middle_circle.setAttribute('r','1000');
        /*----------------------------------------------
            AFTER THE CIRCLES ANIMATION IS COMPLETE, IT IS
            GOING TO FADE AWAY. SO I NEED TO CHANGE THE BODY
            BACKGROUND TO THE IMAGE FROM THE TRANSITION.
        ------------------------------------------------ */
        setTimeout(()=>{
            document.getElementsByClassName('landing-body')[0].style.backgroundImage = replace_img;
            /*-------------------------------------
                IM SETTING THE DEFAULT ATTRIBUTES BACK AGAIN SO
                I CAN MAKE THE ANIMATION ON THE NEXT SLIDE
            --------------------------------------- */
            for(let i = 0; i<g.childNodes.length;i++){
                if(g.childNodes[i].classList[1] == "izquierda"){
                    switch(g.childNodes[i].id){
                        case "left-circle2":
                            g.childNodes[i].style.transform = 'translateX(-45em)';
                            break;
                        case "right-circle2":
                            g.childNodes[i].style.transform = 'translateX(45em)';
                            break;
                        case "middle-circle2":
                            g.childNodes[i].setAttribute('r','40');
                            break;
                    }
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