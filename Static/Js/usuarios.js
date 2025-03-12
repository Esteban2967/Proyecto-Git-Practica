// Obtener referencias a los elementos clave
const addButton = document.querySelector('.add-button');
const userTable = document.getElementById('user-table');

// Evento para agregar un usuario
addButton.addEventListener('click', () => {
    // Pedir información del usuario
    const documento = prompt('Ingrese el número de documento:');
    const nombre = prompt('Ingrese el nombre completo del usuario:');
    const celular = prompt('Ingrese el número de celular:');
    const estado = 'ACTIVO'; // Estado por defecto

    // Validar los campos
    if (!documento || !nombre || !celular) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Crear una nueva fila en la tabla
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${documento}</td>
        <td>${nombre}</td>
        <td>${celular}</td>
        <td class="status active">${estado}</td>
        <td class="options">
            <button class="edit">✏️</button>
            <button class="delete">🗑️</button>
        </td>
    `;

    // Agregar eventos a los botones de editar y eliminar
    const editButton = row.querySelector('.edit');
    const deleteButton = row.querySelector('.delete');

    editButton.addEventListener('click', () => {
        const newNombre = prompt('Ingrese el nuevo nombre:', nombre);
        const newCelular = prompt('Ingrese el nuevo celular:', celular);
        if (newNombre) row.cells[1].textContent = newNombre;
        if (newCelular) row.cells[2].textContent = newCelular;
    });

    deleteButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            row.remove();
        }
    });

    // Añadir la fila a la tabla
    userTable.appendChild(row);
});
