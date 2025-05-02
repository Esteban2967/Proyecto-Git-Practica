let currentHabitacion = null;

// Esta función abre el formulario de reserva cuando se hace clic en el ícono 📝
function openForm(habitacion) {
    currentHabitacion = habitacion; // Guardamos la habitación seleccionada
    document.getElementById("reservation-form").style.display = "flex"; // Mostrar el formulario
}

// Esta función cierra el formulario de reserva
function closeForm() {
    document.getElementById("reservation-form").style.display = "none";
    currentHabitacion = null; // Restablecemos la habitación actual
}

// Función para gestionar la reserva de una habitación
function submitReservation() {
    // Obtener los valores del formulario
    const fechaEntrada = document.getElementById("fecha-entrada").value;
    const fechaSalida = document.getElementById("fecha-salida").value;
    const nombre = document.getElementById("nombre-cliente").value;
    const telefono = document.getElementById("telefono-cliente").value;
    const correo = document.getElementById("correo-cliente").value;
    const departamento = document.getElementById("departamento-cliente").value;
    const ciudad = document.getElementById("ciudad-cliente").value;

    if (!fechaEntrada || !fechaSalida || !nombre || !telefono || !correo || !departamento || !ciudad) {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Eliminar la habitación de la lista de disponibles
    const disponiblesTable = document.getElementById('disponibles-table').querySelector('tbody');
    const reservadasTable = document.getElementById('reservadas-table').querySelector('tbody');

    const rowToMove = Array.from(disponiblesTable.children).find(row => row.textContent.includes(currentHabitacion));
    if (rowToMove) disponiblesTable.removeChild(rowToMove);

    // Agregar la habitación a la lista de reservadas con los datos de la reserva
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${currentHabitacion}</td>
        <td>${nombre}</td>
        <td>${fechaEntrada}</td>
        <td>${fechaSalida}</td>
        <td><button class="status-icon" onclick="moveToOccupied(this, '${currentHabitacion}', '${nombre}')">✅</button></td>
    `;
    reservadasTable.appendChild(newRow);

    closeForm(); // Cerrar el formulario

    // Notificar al usuario
    alert(`La habitación ${currentHabitacion} ha sido reservada para ${nombre} de ${ciudad}, ${departamento} desde el ${fechaEntrada} hasta el ${fechaSalida}.`);
}

// Función para mover una habitación de "Reservadas" a "Ocupadas"
function moveToOccupied(button, habitacion, nombre) {
    const reservadasTable = document.getElementById('reservadas-table').querySelector('tbody');
    const ocupadasTable = document.getElementById('ocupadas-table').querySelector('tbody');

    const rowToMove = button.closest('tr');
    if (rowToMove) reservadasTable.removeChild(rowToMove);

    // Agregar la habitación a la lista de ocupadas
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${habitacion}</td>
        <td>${nombre}</td>
        <td><button class="status-icon" onclick="moveToAttention(this, '${habitacion}')">⚠️</button></td>
    `;
    ocupadasTable.appendChild(newRow);
}

// Función para mover una habitación de "Ocupadas" a "Requieren Atención"
function moveToAttention(button, habitacion) {
    const ocupadasTable = document.getElementById('ocupadas-table').querySelector('tbody');
    const atencionTable = document.getElementById('atencion-table').querySelector('tbody');

    const rowToMove = button.closest('tr');
    if (rowToMove) ocupadasTable.removeChild(rowToMove);

    // Agregar la habitación a la lista de "Requieren Atención"
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${habitacion}</td>
        <td><button class="status-icon" onclick="moveToAvailable(this, '${habitacion}')">🔄</button></td>
    `;
    atencionTable.appendChild(newRow);
}

// Función para mover una habitación de "Requieren Atención" a "Disponibles"
function moveToAvailable(button, habitacion) {
    const atencionTable = document.getElementById('atencion-table').querySelector('tbody');
    const disponiblesTable = document.getElementById('disponibles-table').querySelector('tbody');

    const rowToMove = button.closest('tr');
    if (rowToMove) atencionTable.removeChild(rowToMove);

    // Agregar la habitación de vuelta a la lista de disponibles
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${habitacion}</td>
        <td><button class="status-icon" onclick="openForm('${habitacion}')">📝</button></td>
    `;
    disponiblesTable.appendChild(newRow);
}
