const body = document.querySelector("body")
const nav = document.querySelector('nav')
const main = document.querySelector('main')

//BLUR SIDE BAR
nav.addEventListener('mouseenter', () => {
    main.style.filter = 'blur(5px)'
    body.style.overflow = 'hidden'
});

nav.addEventListener('mouseleave', () => {
    main.style.filter = 'blur(0px)'
    body.style.overflow = 'visible'
});

nav.addEventListener('click', () => {
    nav.classList.remove('hover')
    setTimeout(() => nav.classList.add('hover'), 500)
});

//SWITCH THEME
darkHighlightColor = '#FFA62B'
darkTextColor = '#d3dbf5'
lightHighlightColor = '#FFA62B'
lightTextColor = '#141414'

const themeSwitch = document.querySelectorAll('.switch-theme')
const initialTheme = 'dark-theme'
body.classList.add(initialTheme)
document.querySelector(`#${initialTheme}`).checked =  true
document.querySelector(`label#${initialTheme}`).style.color = darkHighlightColor

function toggleTheme(event){
    const theme = this.value
    body.classList.remove("light-theme", "dark-theme")
    body.classList.add(`${theme}-theme`)
    
    const dark = document.querySelector(`label#dark-theme`)
    const light = document.querySelector(`label#light-theme`)
    if (theme == 'dark') {
        dark.style.color = darkHighlightColor
        light.style.color = darkTextColor
    } else {
        dark.style.color = lightTextColor
        light.style.color = lightHighlightColor
    }
}

Array.from(themeSwitch).forEach( radio => radio.addEventListener('change', toggleTheme))

//TYPE WRITER
function typeWriter(element) {

}

