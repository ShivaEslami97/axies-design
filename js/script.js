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

window.onresize = function () {
    if (this.innerWidth > 1199) {
        document.querySelector('#btn_wallet').innerHTML = '<i class="fa-solid fa-wallet"></i> Wallet connect';
        if (menu.classList.contains("active")) {
            toggleMenu();
        }
    }
    else {
        document.querySelector('#btn_wallet').innerHTML = '<i class="fa-solid fa-wallet"></i>';
    }
};