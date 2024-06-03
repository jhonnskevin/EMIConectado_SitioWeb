document.addEventListener('DOMContentLoaded', function() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
        document.getElementById('userInfo').textContent = `ID: ${usuario.id}, Nombre: ${usuario.nombre}`;
    } else {
        // Si no hay información del usuario, redirigir a la página de login
        window.location.href = 'login.html';
    }
});

function logout() {
    // Eliminar la información del usuario de localStorage
    localStorage.removeItem('usuario');
    // Redirigir a la página de login
    window.location.href = 'login.html';
}
