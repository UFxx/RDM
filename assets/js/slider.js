let offset = 0; // смещение от левого края

const sliderLine = document.querySelector('.slider-line');
const mainCollectionSliderLine = document.querySelector('.main-collection-slider-line')

document.querySelector('.main-slider-left').addEventListener('click', function(){
    offset = offset + 1500; // offset += 256;
    
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.man-slider-left').addEventListener('click', function(){
    offset = offset + 1500; 
    
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.main-slider-right').addEventListener('click', function(){
    offset = offset + -1500; 
    
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.woman-slider-left').addEventListener('click', function(){
    offset = offset + -1500; 
    
    sliderLine.style.left = offset + 'px';
});

