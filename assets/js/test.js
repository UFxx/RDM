for(let i = 0; i <= 1350; i += 450) {
    
    let autoSliderOne = setInterval(() =>  mainCollectionSliderLine.style.left = offset + i + 'px', 1000);

    if (i == 1350) {
        i = 0;
    }
}