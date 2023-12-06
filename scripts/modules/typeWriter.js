import { getLanguage } from "./changeLanguage.js";

export default function TypeWriter(language) { 
    const text = document.querySelector('h3');
    selectPhrases(text, language);
};

function selectPhrases(element, language) {
    const pt = [
        "Desenvolvedor Web",
        "Designing UX e UI"
    ];

    const en = [
        "Web Developer",
        "Designing UX and UI"
    ];

    let phrases;

    if (!language) language = getLanguage();

    if (language == 'pt') phrases = pt; else phrases = en;

    function type() {
        for (let x of phrases) {
            

            for (let y = 0; y <= x.length; y++) {
                setTimeout(() => {
                    element.innerHTML = x.substring(0, y);
                }, 100 * y);
            };
    
            setTimeout(() => {
                for (let z =x.length; z >= 0; z--) {
                    setTimeout(() => {
                        element.innerHTML =x.substring(0, z);
                    }, 100 * (x.length - z));
                };
            }, (100 * x.length ) + 3000);
            
            setTimeout(() => {
                type()
            }, 10 * 1000);
        };
    };

    type();

};

