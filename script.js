

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