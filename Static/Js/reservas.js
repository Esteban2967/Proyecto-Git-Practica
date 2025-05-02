let reservas = [
    {
        nombre: "Juan Pérez",
        cantidad: 2,
        fechaEntrada: "2025-04-20",
        fechaSalida: "2025-04-23",
        habitaciones: [
            { numero: "101", precio: 100 },
            { numero: "102", precio: 120 }
        ],
        estado: "Confirmada",
        pagoAnticipado: 50
    },
    {
        nombre: "Lucía Gómez",
        cantidad: 1,
        fechaEntrada: "2025-04-21",
        fechaSalida: "2025-04-24",
        habitaciones: [{ numero: "201", precio: 150 }],
        estado: "Cancelada",
        pagoAnticipado: 0
    }
];

window.onload = function () {
    cargarTabla();
};

function cargarTabla() {
    const tbody = document.getElementById("tabla-reservas-body");
    tbody.innerHTML = "";

    reservas.forEach((reserva, index) => {
        const fila = document.createElement("tr");

        const acciones = `
            <button onclick="cargarReserva(${index})">Ver Detalles</button>
            ${reserva.estado === "Cancelada" 
                ? `<button onclick="eliminarReserva(${index})" style="background-color: red; margin-left: 5px;">Eliminar</button>` 
                : ""}
        `;

        fila.innerHTML = `
            <td>${reserva.nombre}</td>
            <td>${reserva.cantidad}</td>
            <td>${reserva.fechaEntrada}</td>
            <td>${reserva.fechaSalida}</td>
            <td>${reserva.estado}</td>
            <td>${acciones}</td>
        `;

        tbody.appendChild(fila);
    });
}

function cargarReserva(index) {
    const reserva = reservas[index];

    document.getElementById("nombre").innerText = reserva.nombre;
    document.getElementById("cantidad").innerText = reserva.cantidad;

    const habitaciones = reserva.habitaciones
        .map(h => `Habitación ${h.numero} - $${h.precio}`)
        .join("<br>");
    document.getElementById("lista-habitaciones").innerHTML = habitaciones;

    const precioTotal = reserva.habitaciones.reduce((acc, h) => acc + h.precio, 0);
    document.getElementById("precio-total-reserva").innerText = `$${precioTotal}`;

    document.getElementById("pago-adelantado").innerText = reserva.pagoAnticipado > 0
        ? `$${reserva.pagoAnticipado}`
        : "No hubo pago anticipado";

    document.getElementById("detalle-reserva").style.display = "block";
}

function cerrarModal() {
    document.getElementById("detalle-reserva").style.display = "none";
}

function eliminarReserva(index) {
    if (confirm("¿Seguro que deseas eliminar esta reserva cancelada?")) {
        reservas.splice(index, 1);
        cargarTabla();
    }
}
