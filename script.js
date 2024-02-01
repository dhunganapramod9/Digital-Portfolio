document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const navlist = document.querySelector('.navlist');

    window.onscroll = () => {
        if (window.scrollY > 100) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }

    menu.addEventListener('click', () => {
        navlist.classList.toggle('active');
        menu.classList.toggle('fa-xmark');
    });

    
    function scrollToTarget(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        }
    }

    
    navlist.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetSection = event.target.getAttribute('href');
            scrollToTarget(targetSection);
            navlist.classList.remove('active');
            menu.classList.remove('fa-xmark');
        }
    });
});
