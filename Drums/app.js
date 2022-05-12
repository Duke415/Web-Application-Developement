window.addEventListener('load', () =>{

    const sounds = document.querySelectorAll('.track');
    const pads = document.querySelectorAll('.pads div');
    const visual =document.querySelector('.visual');
    const colors = ["#7B68EE","#1E90FF","#40E0D0","#00FF7F","#9400D3"];

    pads.forEach((pad, i) =>{
        pad.addEventListener('click', function(){

            sounds[i].currentTime = 0;
            sounds[i].play();

            createVisuals(i);
        });
    });

    const createVisuals = (j) =>{

        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[j];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }

});
