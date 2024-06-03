function login() {
    const nombre = document.getElementById('nombre').value;
    const contraseña = document.getElementById('contraseña').value;

    fetch(`http://localhost:55690/Comunicacion.svc/Login?nombre=${encodeURIComponent(nombre)}&contraseña=${encodeURIComponent(contraseña)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.StatusCode === 200) {
            // Almacenar la información del usuario en localStorage
            localStorage.setItem('usuario', JSON.stringify(data.Datos));
            // Redirigir a la página del dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert(data.Mensaje);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error en la solicitud de login');
    });
}
