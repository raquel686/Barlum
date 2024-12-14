// Lista de imágenes y textos
const backgrounds = [
    { image: 'assets/fondo1.jpg', text: 'Con más de 18 años de experiencia' },
    { image: 'assets/fondo2.jpg', text: 'Construcciones eficientes' },
    { image: 'assets/fondo3.jpg', text: 'En cada rincón del Perú' }
];

let currentIndex = 0;

// Crear capas de fondo dinámicamente
function initializeBackgroundLayers() {
    const section = document.getElementById('inicio');

    backgrounds.forEach((bg, index) => {
        const layer = document.createElement('div');
        layer.classList.add('background-layer');
        layer.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${bg.image})`;
        if (index === 0) layer.classList.add('active'); // Hacer la primera visible
        section.appendChild(layer);
    });
}

// Cambiar la capa activa y el texto
function changeBackground() {
    const layers = document.querySelectorAll('.background-layer');
    const textElement = document.querySelector('.footer-special .text');

    // Ocultar la capa actual
    layers[currentIndex].classList.remove('active');

    // Incrementar y reiniciar el índice
    currentIndex = (currentIndex + 1) % backgrounds.length;

    // Mostrar la nueva capa
    layers[currentIndex].classList.add('active');

    // Cambiar el texto con transición
    textElement.style.opacity = '0'; // Ocultar texto
    setTimeout(() => {
        textElement.textContent = backgrounds[currentIndex].text; // Actualizar texto
        textElement.style.opacity = '1'; // Mostrar texto
    }, 500); // Sincronizar con la transición de opacidad
}

// Inicializar y ejecutar
initializeBackgroundLayers();
setInterval(changeBackground, 3500); 


const carouselContainer = document.querySelector('.proyectos-container');
const prevButton = document.querySelector('.control.prev');
const nextButton = document.querySelector('.control.next');

// Variables de control
let currentIndexCarr = 0;
let visibleCards = window.innerWidth > 768 ? 2 : 1; // Determina cuántas tarjetas son visibles

// Recalcula el ancho dinámico
function getCardWidth() {
    return document.querySelector('.proyecto-card').offsetWidth + 20; // Incluye margen (10px de cada lado)
}

function updateCarousel() {
    const cardWidth = getCardWidth(); // Obtén el ancho dinámico de una tarjeta
    const offset = -(currentIndexCarr * cardWidth);
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

window.addEventListener('resize', () => {
    visibleCards = window.innerWidth > 768 ? 2 : 1; // Cambia el número de tarjetas visibles
    currentIndexCarr = 0; // Reinicia el índice actual para evitar desplazamientos incorrectos
    updateCarousel();
});

// Botón "prev"
prevButton.addEventListener('click', () => {
    if (currentIndexCarr > 0) {
        currentIndexCarr--;
    } else {
        currentIndexCarr = document.querySelectorAll('.proyecto-card').length - visibleCards; // Vuelve al final
    }
    updateCarousel();
});

// Botón "next"
nextButton.addEventListener('click', () => {
    if (currentIndexCarr < document.querySelectorAll('.proyecto-card').length - visibleCards) {
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


