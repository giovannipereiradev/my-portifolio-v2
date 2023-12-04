export default function ChangeTheme() {
    const body = document.querySelector("body");

    const darkHighlightColor = '#FFA62B';
    const darkTextColor = '#d3dbf5';
    const lightHighlightColor = '#FFA62B';
    const lightTextColor = '#141414';

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
}