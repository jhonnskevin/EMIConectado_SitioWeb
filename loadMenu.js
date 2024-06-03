document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.html')  // Ruta relativa al mismo nivel
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('menuContainer').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el menú:', error));
});
