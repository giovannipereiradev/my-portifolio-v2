export default function TypeWriter() {
    const text = document.querySelector('h3');
    typeWriter(text);
}

function typeWriter(element) {
    const pt = [
        "Desenvolvedor Web",
        "Designing UX e UI"
    ];

    const en = [
        "Web Developer",
        "Designing UX and UI"
    ];

    let phrases;

    if ( getLanguage() === 'pt') {
        phrases = pt;
    } else {
        phrases = en
    }

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

function getLanguage() {
    let language = navigator.language || navigator.userLanguage;

    if (language == 'pt-BR' || language == 'pt-PT' || language == 'pt') {
        language = 'pt';
    } else {
        language = 'en';
    };
    return language;
};
