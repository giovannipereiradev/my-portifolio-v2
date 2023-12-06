let currentPhraseIndex = 0;
    let isDeleting = false;
    let charIndex = 0;




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