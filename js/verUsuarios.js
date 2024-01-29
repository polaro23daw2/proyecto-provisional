document.addEventListener('DOMContentLoaded', function() {
    fetch('/obtener-usuarios')
        .then(response => response.json())
        .then(usuarios => {
            const tabla = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];
            usuarios.forEach(usuario => {
                const fila = tabla.insertRow();

                const celdaNombre = fila.insertCell();
                celdaNombre.textContent = usuario.username || 'Nombre no proporcionado';

                const celdaEmail = fila.insertCell();
                celdaEmail.textContent = usuario.mail || 'Correo no proporcionado';

                const celdaEliminar = fila.insertCell();
                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.addEventListener('click', function() {

                });
                celdaEliminar.appendChild(botonEliminar);
            });
        })
        .catch(error => console.error('Error al obtener usuarios:', error));
});
