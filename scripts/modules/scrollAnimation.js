export default function ScrollAnimation () {
    const debounce = function (func, wait, immediate) {
        let timeout;
        return function (...args) {
            const context = this;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    
    //SCROLL ANIMATION
    const dataScroll = document.querySelectorAll('[data-scroll-animation]');
    const animationClass = 'animate';
    
    
    const navButtons = {
        home: document.querySelector('#icon-home'),
        about: document.querySelector('#icon-about-me'),
        experience: document.querySelector('#icon-experience')
    };
    
    function scrollAnimation() {
        const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
        
        dataScroll.forEach(function (element) {
            if ((windowTop) > element.offsetTop) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            };
    
            if (windowTop < 1116 ) {
                document.querySelector('.active').classList.remove('active');
                navButtons["home"].classList.add('active');
            } else if (windowTop > 1116  && windowTop < 2213) {
                document.querySelector('.active').classList.remove('active');
                navButtons["about"].classList.add('active');
            } else if (windowTop > 2214) {
                document.querySelector('.active').classList.remove('active');
                navButtons["experience"].classList.add('active');
            }    
        });
    };
    
    scrollAnimation();
    
    if (dataScroll.length) {
        window.addEventListener('scroll', debounce(
            function () {
                scrollAnimation()
            }
        ), 200);
    };    
}