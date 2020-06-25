if(localStorage.getItem("loaded") == "true" && localStorage.getItem("component") == "products"){

  
    let button = document.getElementsByClassName('button-mas')[0];

    let sections = document.getElementsByTagName("section");
    let ver_mas = document.getElementsByClassName("ver-mas");

    
    let back_arrow = document.getElementsByClassName('back-arrow')[0];
    console.log(back_arrow);
    let agregar_btn = document.getElementsByClassName('agregar-button')[0];
    let extra_imgs = null;
   // let categ_boxes = document.getElementsByClassName('categories-box-container')[0].children;


   setTimeout(()=>{
    let categ_boxes = document.getElementsByClassName('category-box');
    if(categ_boxes.length > 0){
    categ_boxes[0].classList.add('active');

    for(let x = 0; x<categ_boxes.length;x++){
        categ_boxes[x].onmouseover = () => {
            categ_boxes[x].style.transition = "1s";
            categ_boxes[x].style.backgroundColor = "#A76F23";
            categ_boxes[x].children[0].style.transition = "1s";
            categ_boxes[x].children[0].style.color = "#F5EBE1";
        }
        categ_boxes[x].onmouseout = () => {
            if(!categ_boxes[x].classList.contains('active')){
                categ_boxes[x].style.backgroundColor = "#F5EBE1";
                categ_boxes[x].children[0].style.color = "#A76F23";
            }
        }
        categ_boxes[x].onclick = () => {
            for(let i = 0; i< categ_boxes.length;i++){
                if(categ_boxes[i].classList.contains('active')){
                    categ_boxes[i].classList.remove('active');
                    categ_boxes[i].style.backgroundColor = "#F5EBE1";
                    categ_boxes[i].children[0].style.color = "#A76F23";
                }
            }
            categ_boxes[x].classList.add('active');
            categ_boxes[x].style.backgroundColor = "#A76F23";
            categ_boxes[x].children[0].style.transition = "1s";
            categ_boxes[x].children[0].style.color = "#F5EBE1";
        }
    }


    let footers = document.getElementsByClassName('card-footer');

    
    for(let x = 0; x<footers.length;x++){
        footers[x].onmouseover = () => {
            footers[x].children[0].style.transition = "1s";
            footers[x].children[0].style.backgroundColor = "grey";
            ver_mas[x].style.transition = "2s";
            ver_mas[x].style.color = "white";
            
        }
        footers[x].onmouseout = () => {
            footers[x].children[0].style.backgroundColor = "#67563F";
            ver_mas[x].style.color = "white";
            ver_mas[x].style.fontWeight = "300";
        }
        footers[x].onclick = () => {
            let products_section = document.getElementsByClassName('products-section-div')[0];
            let vermas_section = document.getElementsByClassName('ver-mas-section')[0];
            products_section.style.transition = "1s";
            products_section.style.transform = "translateX(-100em)";
            vermas_section.style.transition = "2s";
            vermas_section.style.transform = "translateX(0em)";
            let name_clicked = ver_mas[x].id;
            let product_name = document.getElementsByClassName('ver-mas-product-name')[0];
            product_name.innerHTML = name_clicked;
            let images = document.getElementsByClassName('img-identifier');
            back_arrow = document.getElementsByClassName('back-arrow')[0];
            back_arrow.onclick = () => {
                console.log('arrow-clicked');
                let vermas_section = document.getElementsByClassName('ver-mas-section')[0];
                vermas_section.style.transition = "1s";
                vermas_section.style.transform = "translateX(100em)";
                let products_section = document.getElementsByClassName('products-section-div')[0];
                products_section.style.transition = "2s";
                products_section.style.transform = "translateX(0em)";
    
            }
            for(let x = 1; x<images.length;x++){
                images[x].classList.add('extra-img');
            }
        }

    }
}
   },2000)




    if(back_arrow != undefined){

        back_arrow.onclick = () => {
            console.log('arrow-clicked');
            let vermas_section = document.getElementsByClassName('ver-mas-section')[0];
            vermas_section.style.transition = "1s";
            vermas_section.style.transform = "translateX(100em)";
            let products_section = document.getElementsByClassName('products-section-div')[0];
            products_section.style.transition = "2s";
            products_section.style.transform = "translateX(0em)";

        }

    }

    if(agregar_btn != undefined){

        agregar_btn.children[1].onclick = () => {
            console.log('agregar clicked');
            let cart_number = document.getElementsByClassName('cart-number-span')[0];
            cart_number.style.transition = "3s";
            cart_number.style.opacity = '1';
            cart_number.style.fontSize = '2vw';
            cart_number.style.left = '54%';
            cart_number.style.top = '-46%';
            setTimeout(()=>{
                cart_number.style.transition = "0s";
                cart_number.style.opacity = '0';
                cart_number.style.fontSize = '4vw';
                cart_number.style.left = '-95%';
                cart_number.style.top = '32%';
            },2000)
        }
    }

    if(button != undefined){
        button.onclick = () => {
            let main = document.getElementsByClassName("main")[0];
            let pagination = document.getElementsByClassName('onepage-pagination')[0];
            
            main.style.transform = 'translate3d(0px,-100%,0px)';
            main.style.transition = "all 1000ms ease 0s";
            sections[0].classList.remove('active');
            sections[1].classList.add('active');
            localStorage.setItem("direction","downOnProducts");
            pagination.children[0].children[0].classList.remove('active');
            pagination.children[1].children[0].classList.add('active');
            sessionStorage.setItem("activeSection","1");
            localStorage.setItem("onProducts","true");
            let products_container = document.getElementsByClassName("products_container")[0];
            products_container.style.transition = "4s";
            products_container.style.opacity = "1";
        }
    }

    function navigateTo(section){
        setTimeout(()=>{
        let main = document.getElementsByClassName('main')[0];
        let sections = main.children;
        main.style.transition = "all 1000ms ease 0s";
        main.style.transform = "translate3d(0px, -100%, 0px)";
        sections[0].classList.remove('active');
        sections[1].classList.add('active');
        localStorage.setItem("direction","downOnProducts");
        let pagination = document.getElementsByClassName('onepage-pagination')[0];
        pagination.children[0].children[0].classList.remove('active');
        pagination.children[1].children[0].classList.add('active');
        sessionStorage.setItem("activeSection","1");
        localStorage.setItem("onProducts","true");
        let products_container = document.getElementsByClassName("products_container")[0];
        products_container.style.transition = "4s";
        products_container.style.opacity = "1";

        switch(section){
            case "seguridad":
                categ_boxes[1].style.transition = "1s";
                categ_boxes[1].style.backgroundColor = "#A76F23";
                categ_boxes[1].children[0].style.transition = "1s";
                categ_boxes[1].children[0].style.color = "#F5EBE1";
                categ_boxes[1].classList.add('active');
                break;
            case "soportes":
                categ_boxes[2].style.transition = "1s";
                categ_boxes[2].style.backgroundColor = "#A76F23";
                categ_boxes[2].children[0].style.transition = "1s";
                categ_boxes[2].children[0].style.color = "#F5EBE1";
                categ_boxes[2].classList.add('active');
                break;
            case "deportes":
                categ_boxes[3].style.transition = "1s";
                categ_boxes[3].style.backgroundColor = "#A76F23";
                categ_boxes[3].children[0].style.transition = "1s";
                categ_boxes[3].children[0].style.color = "#F5EBE1";
                categ_boxes[3].classList.add('active');
                break;
        }

        categ_boxes[0].style.transition = "1s";
        categ_boxes[0].style.backgroundColor = "#F5EBE1";
        categ_boxes[0].children[0].style.color = "#A76F23";
        categ_boxes[0].classList.remove('active');


        },200)
    }

   /* arrow_up.onclick = () => {
        console.log("Arrow up clicked");
        let section_container = document.getElementsByClassName("section_container")[0];
        let products_section = localStorage.getItem("productsSection");
        let scroll_span = document.getElementsByClassName("scroll-bar")[0].childNodes[0];

        switch(products_section){
            case "2":
              let active_section = 1;
              section_container.style.transition = "opacity 2s";
              section_container.style.opacity = 0;
              section_container.innerHTML = sections[active_section+2].innerHTML;
              section_container.style.opacity = 1;
              localStorage.setItem("case","upFromProducts");
              localStorage.setItem("productsSection","1");
              localStorage.setItem("scrolling","true");
              setTimeout(()=>{this.localStorage.setItem("scrolling","false")},400);

              scroll_span.style.transform = "translateY(0em)";
              scroll_span.style.transition = "0.5s";
              break;
          }
        
        
    }
    arrow_down.onclick = () => {
        console.log("Arrow down clicked");
        let section_container = document.getElementsByClassName("section_container")[0];
        let products_section = localStorage.getItem("productsSection");
        let scroll_span = document.getElementsByClassName("scroll-bar")[0].childNodes[0];

        switch(products_section){
            case "1":
              let active_section = 2;
              section_container.style.transition = "opacity 2s";
              section_container.style.opacity = 0;
              section_container.innerHTML = sections[active_section].innerHTML;
              section_container.style.opacity = 1;
              localStorage.setItem("productsSection","2");
              this.localStorage.setItem("scrolling","true");
              localStorage.setItem("case","");
              setTimeout(()=>{this.localStorage.setItem("scrolling","false")},400);

              // This is for the scroll bar in the products page
            
              scroll_span.style.transform = "translateY(4em)";
              scroll_span.style.transition = "0.5s";
              break;
          }
    }*/


}