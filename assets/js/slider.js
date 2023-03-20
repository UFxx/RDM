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

for (let i =0; i < 3 ; i++ ) {
    let autoSliderOne = setInterval(() =>  mainCollectionSliderLine.style.left = offset + -450 + 'px', 6000);
    let autoSliderTwo = setInterval(() =>  mainCollectionSliderLine.style.left = offset + -900 + 'px', 18000);
    let autoSliderThree = setInterval(() =>  mainCollectionSliderLine.style.left = offset + 'px', 24000);
}