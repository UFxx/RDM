const img1 = document.querySelector('.slider-line__img:nth-child(1)');
const img2 = document.querySelector('.slider-line__img:nth-child(2)');
const img3 = document.querySelector('.slider-line__img:nth-child(3)');
const btn = document.querySelector('.btns-slider__item');


document.querySelector('#button1').addEventListener('click', function() {
    document.querySelector('#button2').classList.remove('active-btn');
    document.querySelector('#button3').classList.remove('active-btn');
    this.classList.add('active-btn');
    img1.style.left = 0;
    img2.style.left = 450 + 'px';
    img3.style.left = 450 + 'px';
})

document.querySelector('#button2').addEventListener('click', function() {
    document.querySelector('#button1').classList.remove('active-btn');
    document.querySelector('#button3').classList.remove('active-btn');
    this.classList.add('active-btn');
    img2.style.left = 0;
    img1.style.left = 450 + 'px';
    img3.style.left = 450 + 'px';
})

document.querySelector('#button3').addEventListener('click', function() {
    document.querySelector('#button1').classList.remove('active-btn');
    document.querySelector('#button2').classList.remove('active-btn');
    this.classList.add('active-btn');
    img3.style.left = 0;
    img2.style.left = 450 + 'px';
    img1.style.left = 450 + 'px';
})