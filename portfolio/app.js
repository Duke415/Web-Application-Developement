const text = ['Student.', 'Web Developer.', 'Quick Learner.'];
let wordCount = 0;
let i = 0;
let currentWord = '';
let letter = '';

(function type() {

    if (wordCount === text.length) {
        wordCount = 0;
    }

    currentWord = text[wordCount];
    letter = currentWord.slice(0, ++i);

    document.querySelector('.typing').textContent = letter;

    if (letter.length === currentWord.length) {

        wordCount++;
        i = 0;
    }

    setTimeout(type, 250);

}());

//Nav-bar animation

const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const colors = ["#F50057", "#F50057", "#F50057", "#F50057", "F50057"];

const options = {

    threshold: 0.9

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

/**********smooth scroll***********/

// function smoothScroll(target, duration) {

//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animationScroll(currentTime) {

//         if (startTime === null) { startTime = currentTime; }
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);

//         if (timeElapsed < duration) { requestAnimationFrame(animationScroll); }

//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t * t + b;
//         t -= 2;
//         return c / 2 * (t * t * t + 2) + b;
//     };

//     requestAnimationFrame(animationScroll);

// }

// var scrollButton = document.querySelector('.project-link');
// scrollButton.addEventListener('click', function () {
//     smoothScroll('.project-position', 1000);
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/****Progress bar*****/

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

// Coursor animation

window.addEventListener('scroll', animateProgressBar)


let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e) {

    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {

    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");

    });

    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");

    });
});

/****************Visual effet*********/

const aboutText = document.querySelector('.text');
const leftUnderline = document.querySelector('.left-line');
const centerUnderline = document.querySelector('.center-line');
const rightUnderline = document.querySelector('.right-line');

const tl = new TimelineMax();

var e = false;

function appearAbout() {

    if (e === false) {

        var introText = document.querySelector('.text');
        var intoPos = introText.getBoundingClientRect().top;
        var screenPos = window.innerHeight / 1.2;

        if (intoPos < screenPos) {

            tl.fromTo(aboutText, 1.5, { x: "-80%", opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut }, "-=0")
                .fromTo(rightUnderline, 1.5, { x: "-500px", opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut }, "-=1.5")
                .fromTo(centerUnderline, 1.5, { x: "-500px", opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut }, "-=1.4")
                .fromTo(leftUnderline, 1.5, { x: "-500px", opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut }, "-=1.3")
            e = true;
        }
    }


}

window.addEventListener('scroll', appearAbout);

