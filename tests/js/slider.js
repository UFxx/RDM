let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + -200; // offset += 256;
    if (offset < -400) {
        offset = 0
    }
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset + 200; // offset += 256;
    if (offset > 0) {
        offset = -400;
    }
    sliderLine.style.left = offset + 'px';
});

// AUTOSLIDER

let autoSlider1 = setInterval(() =>  sliderLine.style.left = offset - 400 + 'px', 7000);
let autoSlider2 = setInterval(() =>  sliderLine.style.left = offset - 800 + 'px', 14000);
let autoSlider3 = setInterval(() =>  sliderLine.style.left = offset + 'px', 21000);