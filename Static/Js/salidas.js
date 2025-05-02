// Simular datos de reservas desde el backend
const reservas = [
    {
        nombre: "Juan Pérez",
        cantidad: 2,
        habitaciones: [
            { numero: "101", precio: 100 },
            { numero: "102", precio: 120 }
        ],
        entrada: "2025-03-15",
        salida: "2025-03-17"
    },
    {
        nombre: "María López",
        cantidad: 1,
        habitaciones: [
            { numero: "202", precio: 150 }
        ],
        entrada: "2025-03-14",
        salida: "2025-03-17"
    }
];

// Cargar datos de las reservas
window.onload = function () {
    const tabla = document.getElementById("habitaciones-listas");
    reservas.forEach((reserva, index) => {
        const fila = tabla.insertRow();
        fila.insertCell(0).innerText = reserva.nombre;
        fila.insertCell(1).innerText = reserva.cantidad;
        fila.insertCell(2).innerText = reserva.entrada;
        fila.insertCell(3).innerText = reserva.salida;
        fila.insertCell(4).innerHTML = `<button onclick="abrirModal(${index})">🔍</button>`;
    });
};

function abrirModal(index) {
    const reserva = reservas[index];
    document.getElementById("nombre").innerText = reserva.nombre;
    document.getElementById("cantidad").innerText = reserva.cantidad;

    // Crear la lista de habitaciones con sus precios
    const listaHabitaciones = reserva.habitaciones
        .map(h => `Habitación ${h.numero} - Precio: $${h.precio}`)
        .join("<br>");
    document.getElementById("lista-habitaciones").innerHTML = listaHabitaciones;

    // Calcular el precio total de la reserva
    const precioReserva = reserva.habitaciones.reduce((total, h) => total + h.precio, 0);
    document.getElementById("precio-total-reserva").innerText = `$${precioReserva}`;

    // Simulación de consumos extras
    const consumos = [
        { producto: "Bebida", precio: 5, cantidad: 2 },
        { producto: "Snack", precio: 3, cantidad: 3 }
    ];
    const totalConsumos = consumos.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const totalFinal = precioReserva + totalConsumos;

    document.getElementById("total-final").innerText = totalFinal.toFixed(2);

    document.getElementById("verificacion-salida").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("verificacion-salida").style.display = "none";
}

function confirmarSalida() {
    alert("Reserva finalizada con éxito.");
    cerrarModal();
}
