

// Lista de imágenes de fondo
const backgrounds = [
    'assets/fondo1.png',
    'assets/fondo2.png',
    'assets/fondo3.png'
];

let currentIndex = 0;

// Función para cambiar el fondo
function changeBackground() {
   
    const section = document.getElementById('inicio');
    currentIndex = (currentIndex + 1) % backgrounds.length; // Incrementa y reinicia
    section.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${backgrounds[currentIndex]})`;
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
    section.style.backgroundRepeat = "no-repeat"; 


}

// Ejecuta el cambio de fondo cada 2 segundos
setInterval(changeBackground, 3000);





const carouselContainer = document.querySelector('.proyectos-container');
const prevButton = document.querySelector('.control.prev');
const nextButton = document.querySelector('.control.next');

// Variables de control
let currentIndexCarr = 0;
let visibleCards = window.innerWidth > 768 ? 2 : 1; // Determina cuántas tarjetas son visibles
const totalCards = document.querySelectorAll('.proyecto-card').length;

// Calcular el ancho de una tarjeta dinámica
const cardWidth = document.querySelector('.proyecto-card').offsetWidth + 10; // Incluye el gap

// Actualizar el carrusel al deslizar
function updateCarousel() {
    const offset = -(currentIndexCarr * cardWidth);
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

// Actualizar el número de tarjetas visibles al redimensionar la ventana
window.addEventListener('resize', () => {
    visibleCards = window.innerWidth > 768 ? 2 : 1; // Cambia el número de tarjetas visibles
    updateCarousel();
});

// Botón "prev"
prevButton.addEventListener('click', () => {
    if (currentIndexCarr > 0) {
        currentIndexCarr--;
    } else {
        currentIndexCarr = totalCards - visibleCards; // Vuelve al final
    }
    updateCarousel();
});

// Botón "next"
nextButton.addEventListener('click', () => {
    if (currentIndexCarr < totalCards - visibleCards) {
        currentIndexCarr++;
    } else {
        currentIndexCarr = 0; // Vuelve al inicio
    }
    updateCarousel();
});

// Inicializar el carrusel
updateCarousel();


//Certificaciones


const certificacionContainer = document.querySelector('.certificacion-container');
const prevCertButton = document.querySelector('.certificaciones-button .prev');
const nextCertButton = document.querySelector('.certificaciones-button .next');

let currentCertIndex = 0; // Índice actual del carrusel
let visibleCertCards = 3; // Número de tarjetas visibles por defecto

// Función para actualizar el número de tarjetas visibles según el tamaño de la pantalla
function updateVisibleCertCards() {
    if (window.innerWidth <= 768) {
        visibleCertCards = 1; // Una tarjeta visible
    } else if (window.innerWidth <= 1024) {
        visibleCertCards = 2; // Dos tarjetas visibles
    } else {
        visibleCertCards = 3; // Tres tarjetas visibles
    }
}

// Función para deslizar el carrusel
function updateCertCarousel() {
    const cardWidth = certificacionContainer.children[0].offsetWidth + 20; // Ancho de cada tarjeta más el gap
    const totalCards = certificacionContainer.children.length; // Número total de tarjetas
    const maxIndex = totalCards - visibleCertCards; // Índice máximo permitido para el deslizamiento

    // Asegurar que el índice no exceda los límites
    currentCertIndex = Math.max(0, Math.min(currentCertIndex, maxIndex));

    // Calcular el desplazamiento
    const offset = -(currentCertIndex * cardWidth);

    // Aplicar el desplazamiento
    certificacionContainer.style.transform = `translateX(${offset}px)`;
}

// Evento para el botón "prev"
prevCertButton.addEventListener('click', () => {
    if (currentCertIndex > 0) {
        currentCertIndex--;
    } else {
        const totalCards = certificacionContainer.children.length;
        currentCertIndex = totalCards - visibleCertCards; // Vuelve al final
    }
    updateCertCarousel();
});

// Evento para el botón "next"
nextCertButton.addEventListener('click', () => {
    const totalCards = certificacionContainer.children.length;
    if (currentCertIndex < totalCards - visibleCertCards) {
        currentCertIndex++;
    } else {
        currentCertIndex = 0; // Vuelve al inicio
    }
    updateCertCarousel();
});

// Ajustar el carrusel al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    updateVisibleCertCards();
    updateCertCarousel();
});

// Inicializar el carrusel
updateVisibleCertCards();
updateCertCarousel();



const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const overlay = document.createElement('div'); // Crear fondo oscuro
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);
const nav = document.querySelector('nav');

// Seleccionar todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu a');

// Función para cerrar el menú y el fondo
function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
}

// Abrir/cerrar menú al hacer clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active'); // Agrega o quita la clase "active"
    overlay.classList.toggle('active');

});

// Cerrar menú al hacer clic fuera del menú
overlay.addEventListener('click', closeMenu);

// Cerrar menú al hacer clic en cualquier enlace
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);

});

const menuLinks2 = document.querySelectorAll('nav a');

menuLinks2.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // Oculta el menú al hacer clic en un enlace
    });
});



// Selecciona el header
const header = document.querySelector('header');

// Escucha el evento de scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Cambia el valor si quieres que el cambio ocurra antes o después
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

