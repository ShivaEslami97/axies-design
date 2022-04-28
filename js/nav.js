///// mobile menu
const menu = document.querySelector('.navbar');
const menuTrigger = document.querySelector('.menu-btn');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuItem = menu.querySelector('.nav__list');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuOverlay = document.querySelector('.overlay');
let subMenu;

menuItem.addEventListener('click', (e) => {
    if (e.target.closest('.has-children')) {
        const hasChildren = e.target.closest('.has-children');
        showSubMenu(hasChildren);
    }
});

menuTrigger.addEventListener('click', () => {
    toggleMenu();
});
menuClosed.addEventListener('click', () => {
    toggleMenu();
});
menuOverlay.addEventListener('click', () => {
    toggleMenu();
});
menuArrow.addEventListener('click', () => {
    hideSubMenu();
});
function toggleMenu() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.nav__child');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slide-toLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    menu.querySelector('.menu-mobile-header').classList.add('active');
}
function hideSubMenu() {
    subMenu.style.animation = "slide-toRight 0.5s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".menu-mobile-title").innerHTML = "";
    menu.querySelector(".menu-mobile-header").classList.remove("active");
}
let wallet = document.querySelector('#btn_wallet');
function checkMediaQuery() {
    // Check if the media query is true
    if (window.innerWidth > 1199) {
        if (wallet) {
            wallet.innerHTML = '<i class="fa-solid fa-wallet"></i> Wallet connect';
        }

        if (menu.classList.contains("active")) {
            toggleMenu();
        }
    }
    else {
        if (wallet) {
            wallet.innerHTML = '<i class="fa-solid fa-wallet"></i>';
        }
    }
}
window.addEventListener('resize', checkMediaQuery);