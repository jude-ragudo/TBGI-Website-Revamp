let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showSlidesAuto, 6000); // Change slide every 4 seconds
}
showSlidesAuto();

// For Dropdown Buttons in Pricing Tables
var numButtons = 11; // Total number of dropdown buttons

for (var i = 1; i <= numButtons; i++) {
    var btnId = "btn-dropdown" + i;
    var navId = "nav-dropdown" + i;

    var btn = document.getElementById(btnId);
    var nav = document.getElementById(navId);

    btn.addEventListener('click', createToggleHandler(btn, nav));
}

function createToggleHandler(button, dropdown) {
    return function () {
        if (!button.classList.contains("is-open")) {
            button.classList.add("is-open");
            dropdown.classList.add("is-open");
        } else {
            button.classList.remove("is-open");
            dropdown.classList.remove("is-open");
        }
    };
}