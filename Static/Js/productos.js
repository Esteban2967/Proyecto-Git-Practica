// formulario.js

document.addEventListener('DOMContentLoaded', () => {
    const btnAbrirModal = document.getElementById('btnAbrirModal');
    const modal = document.getElementById('modal');
    const cerrarModal = document.getElementById('cerrarModal');
    const formulario = document.getElementById('formularioProducto');
    const tabla = document.getElementById('tablaInventario').querySelector('tbody');
    const mensajeError = document.getElementById('mensajeError');

    btnAbrirModal.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
        formulario.reset();
        mensajeError.textContent = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            formulario.reset();
            mensajeError.textContent = '';
        }
    });

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const categoria = document.getElementById('categoria').value;
        const cantidad = parseInt(document.getElementById('cantidad').value, 10);
        const descripcion = document.getElementById('descripcion').value.trim();
        const precio = parseFloat(document.getElementById('precio').value);

        mensajeError.textContent = '';

        if (nombre === '') {
            mensajeError.textContent = 'El nombre no puede estar vacío.';
            return;
        }
        if (isNaN(precio) || precio <= 0) {
            mensajeError.textContent = 'El precio debe ser mayor a 0.';
            return;
        }

        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${nombre}</td>
            <td>${categoria}</td>
            <td>${cantidad}</td>
            <td>${descripcion}</td>
            <td>$${precio.toFixed(2)}</td>
        `;

        tabla.appendChild(nuevaFila);

        alert('Producto agregado correctamente.');
        formulario.reset();
        modal.style.display = 'none';
    });
});
