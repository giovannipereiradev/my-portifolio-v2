const body = document.querySelector("body");
const nav = document.querySelector('nav');
const main = document.querySelector('main');

//FUNCTION DEBOUNCE LODASH
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

//BLUR SIDE BAR
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

//SWITCH THEME
darkHighlightColor = '#FFA62B';
darkTextColor = '#d3dbf5';
lightHighlightColor = '#FFA62B';
lightTextColor = '#141414';

const themeSwitch = document.querySelectorAll('.switch-theme');
const initialTheme = 'dark-theme';
body.classList.add(initialTheme);
document.querySelector(`#${initialTheme}`).checked = true;
document.querySelector(`label#${initialTheme}`).style.color = darkHighlightColor;

function toggleTheme(event) {
    const theme = this.value;
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(`${theme}-theme`);

    const dark = document.querySelector(`label#dark-theme`);
    const light = document.querySelector(`label#light-theme`);
    if (theme == 'dark') {
        dark.style.color = darkHighlightColor;
        light.style.color = darkTextColor;
    } else {
        dark.style.color = lightTextColor;
        light.style.color = lightHighlightColor;
    };
}

Array.from(themeSwitch).forEach(radio => radio.addEventListener('change', toggleTheme));

//TYPE WRITER
function typeWriter(element) {
    const phrases = [
        "Desenvolvedor Web",
        "Designing UX e UI"
    ];

    let currentPhraseIndex = 0;
    let isDeleting = false;
    let charIndex = 0;

    function type() {
        const currentText = phrases[currentPhraseIndex];
        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        };
        if (!isDeleting && charIndex === currentText.length + 1) {
            isDeleting = true;
            setTimeout(() => type(), 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            type();
        } else {
            setTimeout(() => type(), 100);
        };
    };
    type();
};

const text = document.querySelector('h3');
typeWriter(text);

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
        } else if (windowTop > 1116  && windowTop < 1939) {
            document.querySelector('.active').classList.remove('active');
            navButtons["about"].classList.add('active');
        } else if (windowTop > 1940) {
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

//SET lANGUAGE
function getLanguage() {
    let language = navigator.language || navigator.userLanguage;

    if (language == 'pt-BR' || language == 'pt-PT' || language == 'pt') {
        language = 'pt';
    } else {
        language = 'en';
    };
    return language;
};

async function getJson(language) {
    const response = await fetch(`./languages/${language}.json`);
    return response.json();
};

async function changeLanguage(language) { 
    let json = await getJson(language);
    document.querySelectorAll('[data-language]').forEach(function (element) {
        var key = element.dataset.language;
        if (json[key]) {
            element.innerHTML = json[key];
        };
    });
};

let language = getLanguage();
changeLanguage(language)