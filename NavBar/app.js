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