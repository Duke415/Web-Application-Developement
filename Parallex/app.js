let controller =  new ScrollMagic.Controller();  //Allow us to trigger animation when we scroll
let timeline = new TimelineMax(); //to change multiple animation together we create timeline 

timeline
.to('.rock', 3, {y: -100})
.to('.girl', 3, {y: -200}, '-=3')
.fromTo('.bg', {y: -50}, {y: 0, duration: 3}, '-=3')
.to('.content', 3, {top:'0%'}, '-=3')
.fromTo('.content-img', {opacity: 0}, {opacity:1, duration: 3}, '-=1.5')
.fromTo('.text', {x: -200}, {x:0, duration: 3}, '-=2')
.fromTo('.text', {opacity: 0}, {opacity:1, duration: 3}, '-=2');

//to hook animation with scroll we create scene

let scene= new ScrollMagic.Scene({

          //when we want animation to happen we create triggerEelemnt

    triggerElement: 'section', 
    duration: '200%',
    triggerHook: 0,

})

//hooking up animation to seen

.setTween(timeline)
.setPin('section')
.addTo(controller)