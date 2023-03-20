let offset = 0; 
const sliderLine = document.querySelector('.slider-line');
const slider = document.querySelector('.slider');

// document.querySelector('.slider-one').addEventListener('click', function(){
//     offset = offset + -400;
    
// });

// document.querySelector('.slider-two').addEventListener('click', function(){
//     offset = offset + -400;
    
//     document.getElementsByClassName('slider-one')[0].style.backgroundColor = 'white';
//     document.getElementsByClassName('slider-two')[0].style.backgroundColor = 'transparent';
//     sliderLine.style.left = offset + 'px';
// });

// document.querySelector('.slider-three').addEventListener('click', function(){
//     offset = offset + -800;
    
//     if (offset > -800) {
//         offset = 0;
//     }

//     document.getElementsByClassName('slider-two')[0].style.backgroundColor = 'white';
//     document.getElementsByClassName('slider-one')[0].style.backgroundColor = 'white';
//     document.getElementsByClassName('slider-three')[0].style.backgroundColor = 'transparent';
//     sliderLine.style.left = offset + 'px';

// });

// let autoSlider = setInterval (() => 
//     sliderLine.style.left = offset + -400 + 'px' , 500)

let autoSlider1 = setInterval(() =>  sliderLine.style.left = offset - 400 + 'px', 7000);
let autoSlider2 = setInterval(() =>  sliderLine.style.left = offset - 800 + 'px', 14000);
let autoSlider3 = setInterval(() =>  sliderLine.style.left = offset + 'px', 21000);
