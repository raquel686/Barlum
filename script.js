document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    alert('Formulario enviado correctamente');
});
