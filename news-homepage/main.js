import './scss/style.scss'

const body = document.querySelector('body');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');


function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    body.classList.add('noscroll')
}
function closeMobileMenu() {
    btnClose.setAttribute('aria-expanded', 'false');
    body.classList.remove('noscroll')
}


function setupNav(e) {
    if (e.maches) {     
        setTimeout(() => {
            navContent.style.display = 'block';
            navOverlay.style.display = 'block';
        }, 500);
    } else {
        navContent.style.display = '';
    }
}

setupNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
    setupNav(e);
}
);