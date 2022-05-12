function appear(){

    var introText = document.querySelector('.intro-text');
    var intoPos = introText.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.5;

    if(intoPos < screenPos){

        introText.classList.add('appear-text');
    }
}

window.addEventListener('scroll', appear);