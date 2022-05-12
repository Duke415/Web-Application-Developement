const grid = document.querySelector("#hex-grid");
const light = document.querySelector(".light");

grid.addEventListener('mousemove', function(event){

    light.style.left = `${event.clientX}px`;
    light.style.top = `${event.clientY}px`;
    
});