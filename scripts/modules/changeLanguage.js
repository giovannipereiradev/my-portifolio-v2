export default function ChangeLanguage() {
    let language = getLanguage();

    changeLanguage(language);

    const checkBox = document.getElementById('change-language')

    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            changeLanguage('pt');
        } else {
            changeLanguage('en');
        }
    });
}

function getLanguage() {
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

async function changeLanguage(language) { 
    let json = await getJson(language);
    document.querySelectorAll('[data-language]').forEach(function (element) {
        var key = element.dataset.language;
        if (json[key]) {
            element.innerHTML = json[key];
        };
    });
};