//Navbar animation
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const colors = ["#F50057", "#F50057", "#F50057", "#F50057", "F50057"];

const options = {

    threshold: 0.5

};

let observer = new IntersectionObserver(navCheck, options);

sections.forEach(section => {

    observer.observe(section);

});


function navCheck(entries) {

    entries.forEach(entry => {

        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const colorIndex = entry.target.getAttribute('data-index');
        const cords = activeAnchor.getBoundingClientRect();

        const directions = {
            height: cords.height,
            width: cords.width,
            top: cords.top,
            left: cords.left
        };

        if (entry.isIntersecting) {

            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.borderBottom = "2px solid" + colors[colorIndex];
            activeAnchor.style.color = "black";
        }

        if (!entry.isIntersecting) {
            activeAnchor.style.color = "black";
        }
    });

}

//Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Progress bar

var ProgressBar = document.querySelector('#page-progress');
var wholePage = document.querySelector('body');

const animateProgressBar = () => {

    let scrollDistance = wholePage.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (wholePage.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    let correction = value * (-1);
    ProgressBar.style.width = correction + "%";

    if (correction < 0) {
        ProgressBar.style.width = "0%";
    }

}

/********Slider***********/

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

/****************Visual effet*********/

