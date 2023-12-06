const body = document.querySelector("body");
const checkBox = document.getElementById('change-theme');
const checkBoxLabel = document.getElementById('change-theme-label');

const darkHighlightColor = '#FFA62B';
const darkTextColor = '#d3dbf5';
const lightHighlightColor = '#FFA62B';
const lightTextColor = '#141414';


/**
 * This method set the initial theme and call the method 'toggleTheme()' for monitorate status of chekbox.
 * 
 * @method
*/

export default function InitialTheme() {
    const initialTheme = 'dark-theme';
    body.classList.add(initialTheme);

    checkBox.checked = true;

    toggleTheme();

}

/**
 * This method change the body classes responsible for the theme and change the icon buttons.
 * 
 * @method
*/

function toggleTheme() {
    checkBox.addEventListener('change', function () {
        if (checkBox.checked) {
            body.classList.remove('dark-theme')
            body.classList.add('light-theme')
            checkBoxLabel.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
        } else {
            body.classList.remove('light-theme')
            body.classList.add('dark-theme')
            checkBoxLabel.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
        }
    });
}