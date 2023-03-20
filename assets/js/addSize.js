const actionButtons =document.getElementById('action-buttons');
let margin = 0;

function handleKeyPress(e){
    var key=e.keyCode || e.which;
    if (key === 13) { // Клавиша Enter
        let size = document.createElement('li');
        size.innerHTML = document.getElementById('product__size').value;
        size.classList.add('list-item');
        document.querySelector('.product-size-added').appendChild(size);
        

        if (document.getElementById('product__size').value != '') {
            
            document.getElementById('product__size').value = '';

                margin = margin + 40;
                actionButtons.style.marginTop = margin + 'px';
}
}
}