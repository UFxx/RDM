// const block = document.querySelector('.block');

// // Изменить/добавить стили
// block.style.borderRadius = 100 + "%";

// // Добавить класс
// block.classList.add('size', 'border');
// // Удалить класс
// block.classList.remove('size');

// const button = document.querySelector('.toggle');

// button.onclick = function() {
//     // this - этот, то есть объект, над которым производится действие. Вместо него можно поставить любой другой (только его нужно объявить перед этим)
//     this.classList.toggle('background');
// }


// // Создание элемента
// let a = document.createElement('div');
// // Присваиваем текст созданному элементу
// a.innerHTML = "Hello!";
// // Присваиваем класс созданному элементу
// a.classList.add('block');
// // Добавляем в класс add-element
// document.querySelector('.add-element').appendChild(a);

// a.style.marginTop = 100 + 'px';

const btn = document.querySelector('#btn');

function handleKeyPress(e){
    var key=e.keyCode || e.which;
     if (key === 13){ // Клавиша Enter
        let size = document.createElement('li');
    size.innerHTML = document.getElementById('product__size').value;
    document.querySelector('.product-size-added').appendChild(size);
    size.classList.add('list-item', 'position');


    if (document.getElementById('product__size').value != '') {

        document.getElementById('product__size').value = '';
    }
}
}