const btn1 = document.querySelector('.yes');
const btn2 = document.querySelector('.no');

const text1 = document.querySelector('.t1');
const text2 = document.querySelector('.t2');


btn2.addEventListener('click', function(){

        btn2.classList.toggle('rand');

});

btn1.addEventListener('click', function(){

    text1.remove();
    text2.classList.add('t22');
    
    btn1.remove();
    btn2.remove();
   
});