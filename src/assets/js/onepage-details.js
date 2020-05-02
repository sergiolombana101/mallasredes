if(localStorage.getItem("loaded") == "true"){
$(".main").onepage_scroll({
    sectionContainer:"section",
    easing:"ease",
    animatonTime:1000,
    pagination:true,
    updateURL:false,
    beforeMove: async()=>{
      /*----------------------------------------------------
        This script is getting called 2 times in a row for some reason. So that is why I set a boolean
        that checks if the section is moving so the following code would not be ran twice.
        This code is checking if the first section has a length of three, which means it has the class "active"
        If it does, then I want to move to the section below, so I transform the display of the main element to
        -100%, else. I set the display to 0%.
      ------------------------------------------------------*/
      let main = document.getElementsByClassName("main")[0];
      let sections = document.getElementsByTagName("section");
      main.style.transition = "all 1000ms ease 0s";

      const getTransformValue = (transform,direction) => {
        if(transform.length == 0){
          return -100;
        }
        else{
          let percentage_array = transform.split(',');
          if(percentage_array.length == 3){
            let percentage = percentage_array[1].trim();
            percentage = parseInt(percentage);
            (direction == "down") ? percentage -= 100 : percentage += 100;
            return percentage;
          }
        }

      }

      const getPercentageNumber = (transform) => {
        if(transform.length == 0){
          return 0;
        }
        let percentage_array = transform.split(',');
        let percentage = percentage_array[1].trim();
        return parseInt(percentage);
      }

      // If the current component is home then the scrolling will act differently

      if(localStorage.getItem("component") == "home"){

        const getScrollDirection = () => {
          let section = (sessionStorage.getItem("activeSection") == undefined) ? 0 : sessionStorage.getItem("activeSection")
          let currSection_length_before = sections[section].classList.length;
          let previous_percentage = getPercentageNumber(main.style.transform);
          
          setTimeout(()=>{
            let current_percentage = getPercentageNumber(main.style.transform);
            let currSection_length_after = sections[section].classList.length;
            for(let x = 0; x<sections.length;x++){
        
              if(sections[x].classList.length > sections[section].classList.length){
                if(x > section){
                  section = parseInt(section) + 1;
                  sessionStorage.setItem("activeSection",section);
                  return "down";
                }else{
                  section = parseInt(section) -1;
                  sessionStorage.setItem("activeSection",section);
                  return "up";
                }
              }
            }

            if((currSection_length_after < currSection_length_before || currSection_length_after == currSection_length_before)
                &&
                (current_percentage < previous_percentage)){
              section = parseInt(section) + 1;
              sessionStorage.setItem("activeSection",section);

              return "down";
            }else{
              section = parseInt(section)-1;
              sessionStorage.setItem("activeSection",section);

              return "up";
            }
          },100)
        }

        //End of the getDirection function

        if(localStorage.getItem("scrolling") == undefined || localStorage.getItem("scrolling") == "false"){
          let direction = getScrollDirection();
          if(direction == "down"){
            this.localStorage.setItem("scrolling","true");
            setTimeout(()=>{this.localStorage.setItem("scrolling","false")},200);//Sets a timeout so the code will skip the double call
            let transform = getTransformValue(main.style.transform,'down');
            /* If the value returned is more than 0 then it would go to a section that does not exist
               so I am going to default it to the section below which is 200% below*/
            if(transform > 0){transform -= 200;}
            main.style.transform = 'translate3d(0px,'+transform+'%,0px)';
          }else{  
            this.localStorage.setItem("scrolling",true);
            setTimeout(()=>{this.localStorage.setItem("scrolling","false")},200);//Sets a timeout so the code will skip the double call
            let transform = getTransformValue(main.style.transform,'up');
            if(transform > 0){transform -= 200;}
            main.style.transform = 'translate3d(0px,'+transform+'%,0px)';          
          }

        }

      } /*------------- END OF COMPONENT IF ----------------------------------------*/
      else{ // If component is Products
        const getScrollDirection = () => {
          return new Promise((resolve,reject)=>{
            let section = (sessionStorage.getItem("activeSection") == undefined) ? 0 : sessionStorage.getItem("activeSection")         
            setTimeout(()=>{
              for(let x = 0; x<sections.length;x++){
                if(sections[x].classList.contains("active")){
                  let prev_section = sessionStorage.getItem('prevSection');

                  if(x > prev_section){
                    section = parseInt(section) + 1;
                    sessionStorage.setItem("activeSection",section);
                    const prev_session = parseInt(sessionStorage.getItem("activeSection"))-1;
                    sessionStorage.setItem("prevSection",prev_session)
                    if(sections[x].classList.contains("products-1")){
                      resolve("downOnProducts");
                    }else{
                      resolve("down");
                    }
                  }else{
                    section = parseInt(section) - 1;
                    sessionStorage.setItem("activeSection",section);
                    const prev_session = parseInt(sessionStorage.getItem("activeSection"))+1;
                    sessionStorage.setItem("prevSection",prev_session)
                    if(sections[x].classList.contains("products-1")){
                      resolve("upOnProducts");
                    }else{
                      resolve("up");
                    }
                  }
                }
              }
            },100)
          })
        }

  
  
          let direction = '';
          getScrollDirection().then(res=>{
            direction=res;
            //console.log("DIRECTION is: "+direction)
            setTimeout(()=>{
              if(localStorage.getItem("scrolling") == "false"){
              // console.log("DIRECTION  2 is: "+direction)
              }
            },300)
            localStorage.setItem("direction",direction);

            if((sections[1].classList.contains("active"))&&(direction != "downOnProducts")
                ||
              (!(sections[0].classList.contains("active"))&&(direction == "down"))){  

              let section_container = document.getElementsByClassName("section_container")[0];
              let products_section = localStorage.getItem("productsSection");
              let scroll_span = document.getElementsByClassName("scroll-bar")[0].childNodes[0];

              if(direction == "down"){
          
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
          
                

          

              }else{
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
            }else{

            if(localStorage.getItem("scrolling") == undefined || localStorage.getItem("scrolling") == "false"){
            if(direction == "down"){
              this.localStorage.setItem("scrolling","true");
              setTimeout(()=>{this.localStorage.setItem("scrolling","false")},200);//Sets a timeout so the code will skip the double call
              let transform = getTransformValue(main.style.transform,'down');
              /* If the value returned is more than 0 then it would go to a section that does not exist
                 so I am going to default it to the section below which is 200% below*/
              if(transform > 0){transform -= 200;}
              main.style.transform = 'translate3d(0px,'+transform+'%,0px)';
              direction = '';

            }
            else if(direction == "downOnProducts" && localStorage.getItem("scrolling") == "false"){
              this.localStorage.setItem("scrolling","true");
              setTimeout(()=>{this.localStorage.setItem("scrolling","false")},200);//Sets a timeout so the code will skip the double call
              let transform = getTransformValue(main.style.transform,'down');
              /* If the value returned is more than 0 then it would go to a section that does not exist
                 so I am going to default it to the section below which is 200% below*/
              if(transform > 0){transform -= 200;}
              main.style.transform = 'translate3d(0px,'+transform+'%,0px)';
              localStorage.setItem("onProducts","true");
              localStorage.setItem("productsSection","1");
              direction = '';
              let products_container = document.getElementsByClassName("products_container")[0];
              products_container.style.transition = "4s";
              products_container.style.opacity = "1";
            }
            else if(direction == "up"){
              setTimeout(()=>{
                if(localStorage.getItem("scrolling") == "false"){
                  if(localStorage.getItem("direction") != "upOnProducts" &&
                     localStorage.getItem("onProducts") == "true" && localStorage.getItem("productsSection") == "1" &&
                     localStorage.getItem("scrolling") == "false"){
                        this.localStorage.setItem("scrolling","true");
                        setTimeout(()=>{this.localStorage.setItem("scrolling","false")},200);//Sets a timeout so the code will skip the double call
                        let transform = getTransformValue(main.style.transform,'up');
                        if(transform > 0){transform -= 200;}
                        main.style.transform = 'translate3d(0px,'+transform+'%,0px)';   
                        this.localStorage.setItem("onProducts","false");    
                        let products_container = document.getElementsByClassName("products_container")[0];
                        products_container.style.transition = "4s";
                        products_container.style.opacity = "0";   
               }
                }
              },200)  
            }
          }
        }
          })
      }
      



    },
    afterMove:()=>{
    },
    loop: false,
    keyboard: true,
    responsiveFallback:false,
    direction:"vertical"
  })
}