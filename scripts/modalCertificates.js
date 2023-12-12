const modal = document.querySelector('#modal');
const main = document.querySelector('main');
const body = document.querySelector("body");
const nav = document.querySelector('nav');

/**
 * This method just call the 'changeCertificate()'
 * 
 * @method 
*/
export default function ModalCertificates() {
    changeCertificate();
};

/**
 *  This method change the certificate image of modal and call others two methods 'displayModal()' and 'hideModal()'
 * 
 * @method 
*/
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
};

/**
 *This method make a background blur and block the scroll if modal is cativate
 * @method 
*/
function displayModal() {
    modal.style.display = 'block';
    main.style.filter = 'blur(5px)';
    nav.style.filter = 'blur(5px)';
    body.style.overflow = 'hidden';
};

/**
 * This method monitoring the button close of modal, to close modal and remov the blur
 * @method
 */
function hideModal() {
    const closeModal = document.querySelector('#close-modal');

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        main.style.filter = 'blur(0px)';
        nav.style.filter = 'blur(0px)';
        body.style.overflow = 'visible';
    });
};