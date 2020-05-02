if(localStorage.getItem("loaded") == "true" && localStorage.getItem("component") == "products"){
    let button = document.getElementsByClassName('button-mas')[0];
    let arrow_up = document.getElementsByClassName('arrow-up')[0].children[0];
    let arrow_down = document.getElementsByClassName('arrow-down')[0].children[0];
    let sections = document.getElementsByTagName("section");
    let ver_mas = document.getElementsByClassName("ver-mas");

    for(let x = 0; x<ver_mas.length;x++){
        ver_mas[x].onmouseover = () => {
            ver_mas[x].style.transition = "1s";
            ver_mas[x].style.color = "#67563F";
            let card_footer = ver_mas[x].parentElement;
            card_footer.style.backgroundColor = "rgba(103, 86, 63, 0.59)";
        }
        ver_mas[x].onmouseout = () => {
            ver_mas[x].style.color = "white";
            let card_footer = ver_mas[x].parentElement;
            card_footer.style.backgroundColor = "#67563F";
        }
    }
    
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
    }

    arrow_up.onclick = () => {
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
    }


}