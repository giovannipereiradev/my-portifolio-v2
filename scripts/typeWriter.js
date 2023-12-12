
export default function TypeWriter() { 
    const element = document.querySelector('h3');
    selectPhrases(element);
};

function selectPhrases(element) {
    const phrases = element.innerHTML.split('|'); 

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
            setTimeout(() => type(), 500);
        } else {
            setTimeout(() => type(), 100); 
        };
    };
    type();
};