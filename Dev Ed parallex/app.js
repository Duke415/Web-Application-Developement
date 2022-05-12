function parallex(element, distance, speed){

    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener('scroll', function(){

    parallex('header', window.scrollY, 1);
    parallex('.small-rose', window.scrollY, 0.4);
    parallex('.big-rose', this.window.scrollY, 0.2);
});