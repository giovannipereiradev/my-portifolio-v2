const body = document.querySelector("body");
const darkHighlightColor = '#FFA62B';
const darkTextColor = '#d3dbf5';
const lightHighlightColor = '#FFA62B';
const lightTextColor = '#141414';


/**
 * This method set the initial theme, edit the button of change theme, make the input checked and change your color and call the method 'toggleTheme()'.
 * 
 * @method
 */
export default function ChangeTheme() {
    
    const themeSwitch = document.querySelectorAll('.switch-theme');
    const initialTheme = 'dark-theme';
    body.classList.add(initialTheme);
    document.querySelector(`#${initialTheme}`).checked = true;
    document.querySelector(`label#${initialTheme}`).style.color = darkHighlightColor;

    

    Array.from(themeSwitch).forEach(radio => radio.addEventListener('change', toggleTheme));
}


/**
 * This method change the body classes responsible for the theme and changes the button theme colors.
 * 
 * @method
 */
function toggleTheme() {
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