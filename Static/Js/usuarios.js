// Referencias a elementos clave
const addButton = document.querySelector('.add-button');
const modal = document.getElementById('user-modal');
const cancelButton = document.getElementById('cancel-button');
const userForm = document.getElementById('user-form');
const userTable = document.getElementById('user-table');

// Mostrar ventana emergente
addButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cerrar ventana emergente
cancelButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Agregar usuario desde el formulario
userForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener datos del formulario
    const documentValue = document.getElementById('document').value;
    const nameValue = document.getElementById('name').value;
    const phoneValue = document.getElementById('phone').value;

    // Crear una nueva fila en la tabla
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${documentValue}</td>
        <td>${nameValue}</td>
        <td>${phoneValue}</td>
        <td class="status active">ACTIVO</td>
        <td class="options">
            <button class="edit">✏️</button>
            <button class="delete">🗑️</button>
        </td>
    `;

    // Agregar eventos a los botones de edición y eliminación
    const editButton = row.querySelector('.edit');
    const deleteButton = row.querySelector('.delete');

    editButton.addEventListener('click', () => {
        const newName = prompt('Nuevo nombre:', nameValue);
        const newPhone = prompt('Nuevo celular:', phoneValue);
        if (newName) row.cells[1].textContent = newName;
        if (newPhone) row.cells[2].textContent = newPhone;
    });

    deleteButton.addEventListener('click', () => {
        if (confirm('¿Eliminar este usuario?')) row.remove();
    });

    // Añadir la fila a la tabla
    userTable.appendChild(row);

    // Limpiar el formulario y cerrar la ventana
    userForm.reset();
    modal.style.display = 'none';
});
