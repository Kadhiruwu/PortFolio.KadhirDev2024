// Crea un objeto para almacenar los índices de cada carrusel
let indices = {
    carousel1: 0,
    carousel2: 0,
    carousel3: 0
};

// Función para mostrar la diapositiva de un carrusel específico
function showSlide(carouselId, i) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-inner img');
    const totalSlides = slides.length;

    if (i >= totalSlides) {
        indices[carouselId] = 0;
    } else if (i < 0) {
        indices[carouselId] = totalSlides - 1;
    } else {
        indices[carouselId] = i;
    }

    const offset = -indices[carouselId] * 100;
    carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Funciones para avanzar y retroceder en un carrusel específico
function nextSlide(carouselNumber) {
    const carouselId = 'carousel' + carouselNumber;
    showSlide(carouselId, indices[carouselId] + 1);
}

function prevSlide(carouselNumber) {
    const carouselId = 'carousel' + carouselNumber;
    showSlide(carouselId, indices[carouselId] - 1);
}



// Muestra la primera diapositiva de cada carrusel al cargar la página
showSlide('carousel1', 0);
showSlide('carousel2', 0);
showSlide('carousel3', 0);

const enlaces = document.querySelector('.enlaces');
const menu = document.querySelector('#menu');
menu.addEventListener('click', function(){
    enlaces.classList.toggle('mostrar');
})

document.getElementById('info2').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('informacion').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('info').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('experiencia').scrollIntoView({
        behavior: 'smooth'
    });
});