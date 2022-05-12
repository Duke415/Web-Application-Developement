const box = document.querySelector('.box');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const text = document.querySelector('.slogan');
const links = document.querySelector('.links');

const tl = new TimelineMax();

tl.fromTo(box,1.2, {height: "0%"}, {height: "80%" ,ease: Power2.easeInOut})
.fromTo(box,1.2, {width: "100%"}, {width: "80%" ,ease: Power2.easeInOut})
.fromTo(slider, 1.2 , {x:"-100%"}, {x:"0%" ,ease: Power2.easeInOut}, '-=1.2')
.fromTo(text, 1.2, {opacity:0, x: "-350%"}, {opacity:1, x:"-10%" ,ease: Power2.easeInOut}, '-=1.12')
.fromTo(logo, 1.2, {opacity:0}, {color: "#a6bbda", opacity:1 ,ease: Power2.easeInOut}, '-=1.2')
.fromTo(links, 1.2, {opacity:0}, {opacity:1 ,ease: Power2.easeInOut}, '-=1.2')