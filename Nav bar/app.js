const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const colors = ["white","white","white"];

const options = {

    threshold: 0.5
    

};

let observer = new IntersectionObserver(navCheck,options);

sections.forEach(section => {
    
    observer.observe(section);

});

function navCheck(entries){

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

        if(entry.isIntersecting){

            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            //bubble.style.background = colors[colorIndex];
            activeAnchor.style.color = "white";
        }

        if(!entry.isIntersecting){
            activeAnchor.style.color = "black";
        }
    });

}

