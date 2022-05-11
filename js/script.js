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
});
///// searchBox
const headerSearchBtn = document.querySelector(".search__link");
const headerSearchbox = document.querySelector(".search__open-box");

headerSearchBtn.addEventListener("click", function (params) {
    if (headerSearchbox.classList.contains('show')) {
        headerSearchbox.classList.remove('show');
        document.querySelector('.search__input').value = '';
    }
    else {
        headerSearchbox.classList.add('show');
    }
});

document.onclick = function (e) {
    //element clicked wasn't the div; hide the div
    if (!headerSearchbox.contains(e.target) && !headerSearchBtn.contains(e.target)) {
        headerSearchbox.classList.remove('show');
        document.querySelector('.search__input').value = '';
    }
};