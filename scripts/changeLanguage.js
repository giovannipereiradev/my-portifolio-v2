/**
 * This method call other two methods, 'getLanguage()' and 'changeHTML()', then monitors changes to the checkbox to select the correct language.
 * @method
*/

export default function ChangeLanguage() {

    let language = getLanguage();

    changeHTML(language);

    const checkBox = document.getElementById('change-language')
    const iconAnamation = document.getElementById('change-language-label');

    checkBox.addEventListener('change', function () {
        iconAnamation.classList.add('rotate');
        setTimeout(function () {
            iconAnamation.classList.remove('rotate');
        }, 500);

        if (checkBox.checked) {
            changeHTML('pt');
        } else {
            changeHTML('en');
        };
    });
};


/**
 * This function get the languages preferencies of user, use to set initial language for site.
 * 
 * @returns {language} Return the default navigator language
 * @function
*/
export function getLanguage() {
    let language = navigator.language || navigator.userLanguage;
    const checkBox = document.getElementById('change-language');

    if (language == 'pt-BR' || language == 'pt-PT' || language == 'pt') {
        language = 'pt';
        checkBox.checked = true;
    } else {
        language = 'en';
        checkBox.checked = false;
    };
    return language;
};

/**
 * This function get the information to .json and replace the HTML
 * @param {String} language Recive the language
 * @method 
*/
async function changeHTML(language) {
    let json = await getJson(language);
    document.querySelectorAll('[data-language]').forEach(function (element) {
        var key = element.dataset.language;
        if (json[key]) {
            element.innerHTML = json[key];
        };
    });
};

/**
 * This function recive the language and find the .json for replace the HTML
 * @param {String} language Recive 'pt' or 'en';
 * @returns {response} Return the archive .json to make the change to the HTML
 * @function
 */
async function getJson(language) {
    const response = await fetch(`../../languages/${language}.json`);
    return response.json();
};