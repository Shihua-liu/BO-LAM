window.addEventListener('DOMContentLoaded', (event) => {
    var slides = document.getElementsByClassName("slide");
    for (var x = 0; x < slides.length; x++) {
        slides[x].style.opacity = 0;
    }

    var id = 0;
    slides[id].style.opacity = 1;

    setInterval(() => {
        slides[id].style.opacity = 0;
        id = (id + 1) % slides.length;
        slides[id].style.opacity = 1;
    }, 10000);
});