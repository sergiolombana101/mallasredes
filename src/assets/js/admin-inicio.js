let options = document.getElementsByClassName('option');

for(let x =0; x<options.length;x++){
    options[x].onmouseover = () => {
        options[x].style.transition = "1s";
        options[x].style.backgroundColor = 'rgba(255, 255, 255, 0.36)';
    }
    options[x].onmouseleave = () => {
        options[x].style.backgroundColor = '';
    }
    options[x].onclick = () => {
        let option_number = x;
        let active_bar = document.getElementsByClassName('active-bar-container')[0];
        let placeholder_tag = document.getElementsByClassName('placeholder-tag')[0];
        let products_tag = document.getElementsByClassName('products-tag')[0];
        switch(option_number){
            case 0:
                active_bar.style.top = '31.5%'
                placeholder_tag.style.display = 'initial';
                products_tag.style.display = 'none';
                break;
            case 1:
                active_bar.style.top = '42.5%'
                placeholder_tag.style.display = 'initial';
                products_tag.style.display = 'none';
                break;
            case 2:
                active_bar.style.top = '55%'
                placeholder_tag.style.display = 'none';
                products_tag.style.display = 'initial';
                break;
        }
    }
}
