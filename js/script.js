window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
///////// back to top

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const scrollContainer = () => {
    return document.documentElement || document.body;
};
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", goToTop);

///// preloader
let overlay = document.getElementById("preloader");
window.addEventListener('load', function () {
    overlay.style.display = 'none';
})

///// mobile menu
const menu = document.querySelector('.navbar');
const menuTrigger = document.querySelector('.menu-btn');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuItem = menu.querySelector('.nav__list');
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
function toggleMenu() {
    menu.classList.toggle('active');
}
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.nav__child');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slide-toLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    menu.querySelector('.menu-mobile-header').classList.add('active');
}
