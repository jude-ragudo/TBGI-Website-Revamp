const swiper1 = new Swiper('.swiper-vision', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 8000
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // If we need pagination
    pagination: {
        el: '.swiper-vision-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-vision-button-next',
        prevEl: '.swiper-vision-button-prev',
    },
});

const swiper2 = new Swiper('.swiper-services', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 8000
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-services-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-services-button-next',
        prevEl: '.swiper-services-button-prev',
    },

});

function switchTab(evt, planName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(planName).style.display = "flex";
    evt.currentTarget.className += " active";
}

function loadTab(evt, planName) {
    document.getElementById(planName).style.display = "flex";
    evt.currentTarget.className += " active";
}

window.onload = function () {
    loadTab(event, 'plan1')
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var line = document.querySelector('.line');
var line2 = document.querySelector('.servicesLine');
var line3 = document.querySelector('.-tgbiline');

function moveLineOnScroll() {
    if (isElementInViewport(line)) {
        line.classList.add('move');
        window.removeEventListener('scroll', moveLineOnScroll); // Remove the event listener after the line moves
    }
}

function moveLineOnScroll2() {
    if (isElementInViewport(line2)) {
        line2.classList.add('move2');
        window.removeEventListener('scroll', moveLineOnScroll); // Remove the event listener after the line moves
    }
}

function moveLineOnScroll3() {
    if (isElementInViewport(line3)) {
        line3.classList.add('move3');
        window.removeEventListener('scroll', moveLineOnScroll); // Remove the event listener after the line moves
    }
}

window.addEventListener('scroll', moveLineOnScroll);
window.addEventListener('scroll', moveLineOnScroll2);
window.addEventListener('scroll', moveLineOnScroll3);