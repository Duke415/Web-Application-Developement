const on = document.querySelector('.on');
const off = document.querySelector('.off');

on.addEventListener('click', function(){

    let bulb = document.getElementById('bulb');
    bulb.src = "img/on-bulb.png";
    bulb.style.opacity = "1";


});


off.addEventListener('click', function(){

    let bulb = document.getElementById('bulb');
    bulb.src = "img/off-bulb.png";
    bulb.style.opacity = "0.5";

});
