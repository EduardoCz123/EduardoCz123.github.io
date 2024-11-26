// Obtener el botón y el contenedor del video
const mostrarVideoBtn = document.getElementById('miBoton');
const videoContainer = document.getElementById('videoContainer');

// Agregar el evento de clic al botón
mostrarVideoBtn.addEventListener('click', function() {
    // Cambiar el estilo del contenedor para mostrar el video
    videoContainer.style.display = 'block';
});
