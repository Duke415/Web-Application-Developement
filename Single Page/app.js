const respNav = () => {

    const navBtn = document.querySelector('.menu-bar');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    navBtn.addEventListener('click', function () {

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, i) => {

            if (link.style.animation) {
                link.style.animation = '';
            }

            else {
                link.style.animation = `navLinkAnimation 0.5s ease forwards ${i / 7 + 0.42}s`;
            }

        });

        navBtn.classList.toggle('menu-cross');
    });
}

respNav();

const box = document.querySelector('.boxA');
const slider = document.querySelector('.bgslider');
const logo = document.querySelector('#logo');
const text = document.querySelector('.slogan');
const links = document.querySelector('.links');

const tl = new TimelineMax();

tl.fromTo(box, 1.2, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(box, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, '-=1.2')
    .fromTo(text, 1.2, { opacity: 0, x: "-350%" }, { opacity: 1, x: "-10%", ease: Power2.easeInOut }, '-=1.12')
    .fromTo(logo, 1.2, { opacity: 0 }, { color: "#a6bbda", opacity: 1, ease: Power2.easeInOut }, '-=1.2')
    .fromTo(links, 1.2, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=1.2')


$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});

var testimonials = document.getElementById('testimonials');
var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');


control1.onclick = function () {
    testimonials.style.transform = "translateX(870px)";
    control1.classList.add("activeControll");
    control2.classList.remove("activeControll");
    control3.classList.remove("activeControll");
}

control2.onclick = function () {
    testimonials.style.transform = "translateX(0px)";
    control1.classList.remove("activeControll");
    control2.classList.add("activeControll");
    control3.classList.remove("activeControll");
}

control3.onclick = function () {
    testimonials.style.transform = "translateX(-870px)";
    control1.classList.remove("activeControll");
    control2.classList.remove("activeControll");
    control3.classList.add("activeControll");
}

document.querySelector(".box1").onclick = function () {
    window.location = 'https://portal.ucp.edu.pk/';
}


