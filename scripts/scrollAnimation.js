
/**
 * This method call the 'scroolAnimation()' use a debounce function to set a delay to optimize the monitoring event.
 * @method 
*/

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
    


    const dataScroll = document.querySelectorAll('[data-scroll-animation]');
    const animationClass = 'animate';
    const navButtons = {
        home: document.querySelector('#icon-home'),
        about: document.querySelector('#icon-about-me'),
        experience: document.querySelector('#icon-experience'),
        certificates: document.querySelector('#icon-certificates'),
        projects: document.querySelector('#icon-projects'),
        contacts: document.querySelector('#icon-contacts'),
    };

    /**
     * Monitoring the WindowTop to set class 'active' in the nav and add animation class in he elements.
     * @method
    */

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
            } else if (windowTop > 2214  && windowTop < 2995) {
                document.querySelector('.active').classList.remove('active');
                navButtons["experience"].classList.add('active');
            } else if (windowTop > 2996) {
                document.querySelector('.active').classList.remove('active');
                navButtons["certificates"].classList.add('active');
            };
        });
    };
    
    scrollAnimation();
    
    if (dataScroll.length) {
        window.addEventListener('scroll', debounce( function () {
            scrollAnimation();
        }), 200);
    };    
};