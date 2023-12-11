const modal = document.querySelector('#modal');
const main = document.querySelector('main');
const body = document.querySelector("body");
const nav = document.querySelector('nav');

export default function ModalCertificates() {
    changeCertificate();
}

function changeCertificate() {
    const openModal = document.querySelectorAll('.open-modal')

    openModal.forEach(function(bnt) {
        bnt.addEventListener('click', function() {
            let imageCertificate = document.querySelector('#image-certificate');
            imageCertificate.src = `./images/certificates/${bnt.dataset.certificates}.png`
            
            displayModal();
            hideModal();
        });
    });
}

function displayModal() {
    modal.style.display = 'block';
    main.style.filter = 'blur(5px)';
    nav.style.filter = 'blur(5px)';
    body.style.overflow = 'hidden';
}

function hideModal() {
    const closeModal = document.querySelector('#close-modal');

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        main.style.filter = 'blur(0px)';
        nav.style.filter = 'blur(0px)';
        body.style.overflow = 'visible';
    });
};