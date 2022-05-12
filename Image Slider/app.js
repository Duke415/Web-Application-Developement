const slide = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let count = 1;
const imgSize = images[0].clientWidth; 

slide.style.transform = 'translateX(' + (-imgSize*count) + 'px)';


nextBtn.addEventListener('click', ()=>{

    if(count >= images.length -1)
        return;

    slide.style.transition = "transform 0.5s ease-in-out";
    count++;
    slide.style.transform = 'translateX(' + (-imgSize*count) + 'px)';

});

prevBtn.addEventListener('click', ()=>{

    if(count <= 0)
        return;

    slide.style.transition = "transform 0.5s ease-in-out";
    count--;
    slide.style.transform = 'translateX(' + (-imgSize*count) + 'px)';

});

slide.addEventListener('transitionend', ()=>{

    if(images[count].id === 'last'){
    
        slide.style.transition = "none";
        count = images.length - 2;
        slide.style.transform = 'translateX(' + (-imgSize*count) + 'px)';
    }

    if(images[count].id === "first"){

        slide.style.transition = "none";
        count = images.length - count;
        slide.style.transform = 'translateX(' + (-imgSize*count) + 'px)';

    }

});

