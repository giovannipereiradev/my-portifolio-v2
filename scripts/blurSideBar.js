/**
 * This method make the body stay blur while the user hover the sidebar.
 * @method
*/

export default function BlurSideBar() {
    const body = document.querySelector("body");
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const modal = document.querySelector('#modal');


    nav.addEventListener('mouseenter', () => {
        if (window.getComputedStyle(modal).getPropertyValue('display') == 'none') {
            nav.style.width = '250px'
            main.style.filter = 'blur(5px)';
            body.style.overflow = 'hidden';
        }
    });
    
    nav.addEventListener('mouseleave', () => {
        if (window.getComputedStyle(modal).getPropertyValue('display') == 'none') {
            main.style.filter = 'blur(0px)';
            body.style.overflow = 'visible';
            nav.style.width = '60px';
        }
    });
    
    nav.addEventListener('click', () => {
        if (window.getComputedStyle(modal).getPropertyValue('display') == 'none') {
            main.style.filter = 'blur(0px)';
            body.style.overflow = 'visible';
            nav.style.width = '60px';
        }
    });
};