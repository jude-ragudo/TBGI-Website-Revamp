function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Vertical lines
var line = document.querySelector('.verticalthick2');
var line2 = document.querySelector('.verticalthick4');

// Label lists
var hithru = document.querySelector('.hi-thru');
var words = document.querySelector('.words');
var words2 = document.querySelector('.words2');

function moveLineOnScroll() {
    if (isElementInViewport(hithru)) {
        line.classList.add('move');
        window.removeEventListener('scroll', moveLineOnScroll);
    }
}

function moveLineOnScroll2() {
    if (isElementInViewport(words)) {
        line2.classList.add('move2');
        words.classList.add('move3');
        words2.classList.add('move4');
        window.removeEventListener('scroll', moveLineOnScroll2);
    }
}

window.addEventListener('scroll', moveLineOnScroll);
window.addEventListener('scroll', moveLineOnScroll2);