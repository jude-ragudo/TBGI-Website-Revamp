function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var line = document.querySelector('.onboard-line2');
var line2 = document.querySelector('.career-line2');

function moveLineOnScroll() {
    if (isElementInViewport(line)) {
        line.classList.add('move');
        window.removeEventListener('scroll', moveLineOnScroll);
    }
}

function moveLineOnScroll2() {
    if (isElementInViewport(line2)) {
        line2.classList.add('move2');
        window.removeEventListener('scroll', moveLineOnScroll);
    }
}

window.addEventListener('scroll', moveLineOnScroll);
window.addEventListener('scroll', moveLineOnScroll2);