document.getElementById("password-show").addEventListener("click", function () {
    var e = document.getElementById("password");
    "password" === e.type ? e.type = "text" : e.type = "password"
});

///// preloader
let overlay = document.getElementById("preloader");
window.addEventListener('load', function () {
    overlay.style.display = 'none';
})