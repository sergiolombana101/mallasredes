
let categorias = document.getElementsByClassName('categoria');

if(categorias != undefined){
    console.log(categorias);
    setTimeout(()=>{
        categorias[0].style.backgroundColor = "#A3917E";
        categorias[0].classList.add('active')
        for(let x = 0; x<categorias.length;x++){
            categorias[x].onmouseover = () => {
                categorias[x].style.transition = "1s";
                categorias[x].style.backgroundColor = "#A3917E";
            }
            categorias[x].onmouseout = () => {
                if(!categorias[x].classList.contains('active')){
                    categorias[x].style.backgroundColor = "#585858";
                }
            }
            categorias[x].onclick = () => {
                for(let i = 0; i<categorias.length;i++){
                    if(categorias[i].classList.contains('active')){
                        categorias[i].classList.remove('active');
                        categorias[i].style.transition = '1s';
                        categorias[i].style.backgroundColor = "#585858";
                    }
                }
                categorias[x].classList.add('active');
                categorias[x].style.transition = "1s";
                categorias[x].style.backgroundColor = "#A3917E";
            }
        }
    },500)
}

