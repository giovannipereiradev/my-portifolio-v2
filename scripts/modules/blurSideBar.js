/**
 * This method make the body stay blur while the user hover the sidebar.
 * @method
 */

export default function BlurSideBar() {
    const body = document.querySelector("body");
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');

    nav.addEventListener('mouseenter', () => {
        main.style.filter = 'blur(5px)';
        body.style.overflow = 'hidden';
    });
    
    nav.addEventListener('mouseleave', () => {
        main.style.filter = 'blur(0px)';
        body.style.overflow = 'visible';
    });
    
    nav.addEventListener('click', () => {
        nav.classList.remove('hover');
        setTimeout(() => nav.classList.add('hover'), 500);
    });
}