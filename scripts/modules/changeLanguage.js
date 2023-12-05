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

export function getLanguage() {
    let language = navigator.language || navigator.userLanguage;
    const checkBox = document.getElementById('change-language')

    if (language == 'pt-BR' || language == 'pt-PT' || language == 'pt') {
        language = 'pt';
        checkBox.checked = true;
    } else {
        language = 'en';
        checkBox.checked = false;
    };
    return language;
};

async function getJson(language) {
    const response = await fetch(`../../languages/${language}.json`);
    return response.json();
};

async function changeHTML(language) {
    let json = await getJson(language);
    document.querySelectorAll('[data-language]').forEach(function (element) {
        var key = element.dataset.language;
        if (json[key]) {
            element.innerHTML = json[key];
        };
    });
};