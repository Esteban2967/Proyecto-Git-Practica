const productos = {
    "Bebida": 5.00,
    "Snack": 3.00,
    "Cena": 15.00,
    "Lavandería": 10.00
};

const reservas = [
    {
        nombre: "Juan Pérez",
        cantidad: 2,
        fechaEntrada: "2025-04-20",
        fechaSalida: "2025-04-23",
        habitaciones: [
            { numero: "101", precio: 100 },
            { numero: "102", precio: 120 }
        ],
        estado: "Hospedado",
        pagoAnticipado: 50
    },
    {
        nombre: "Lucía Gómez",
        cantidad: 1,
        fechaEntrada: "2025-04-21",
        fechaSalida: "2025-04-24",
        habitaciones: [{ numero: "201", precio: 150 }],
        estado: "Hospedado",
        pagoAnticipado: 0
    }
];

let reservaSeleccionada = null;

window.onload = function () {
    const tbody = document.getElementById("tabla-reservas");
    reservas.forEach((reserva, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${reserva.nombre}</td>
            <td>${reserva.cantidad}</td>
            <td>${reserva.fechaEntrada}</td>
            <td>${reserva.fechaSalida}</td>
            <td>${reserva.estado}</td>
            <td><button onclick="abrirModal(${index})">Ver Consumos</button></td>
        `;
        tbody.appendChild(fila);
    });
};

function abrirModal(index) {
    reservaSeleccionada = reservas[index];

    document.getElementById("nombre").innerText = reservaSeleccionada.nombre;
    document.getElementById("cantidad").innerText = reservaSeleccionada.cantidad;

    const lista = reservaSeleccionada.habitaciones
        .map(h => `Hab. ${h.numero} - $${h.precio}`)
        .join("<br>");
    document.getElementById("lista-habitaciones").innerHTML = lista;

    const precioTotal = reservaSeleccionada.habitaciones.reduce((sum, h) => sum + h.precio, 0);
    document.getElementById("precio-total-reserva").innerText = `$${precioTotal}`;
    document.getElementById("pago-adelantado").innerText = reservaSeleccionada.pagoAnticipado > 0
        ? `$${reservaSeleccionada.pagoAnticipado}`
        : "No hubo pago anticipado";

    document.getElementById("consumos-body").innerHTML = "";
    document.getElementById("total-adeudado").innerText = "0.00";
    document.getElementById("modal-consumo").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal-consumo").style.display = "none";
}

function agregarFila() {
    const tabla = document.getElementById("consumos-body");
    const fila = document.createElement("tr");

    const select = document.createElement("select");
    for (let prod in productos) {
        const option = document.createElement("option");
        option.value = prod;
        option.text = prod;
        select.appendChild(option);
    }
    select.onchange = () => actualizarPrecioUnitario(fila);

    const precio = document.createElement("input");
    precio.type = "text";
    precio.readOnly = true;
    precio.value = productos[select.value].toFixed(2);

    const cantidad = document.createElement("input");
    cantidad.type = "number";
    cantidad.min = 1;
    cantidad.value = 1;
    cantidad.oninput = () => actualizarTotalFila(fila);

    const total = document.createElement("input");
    total.type = "text";
    total.readOnly = true;
    total.value = (productos[select.value] * 1).toFixed(2);

    const estadoPago = document.createElement("select");
    estadoPago.innerHTML = `
        <option value="pagado">Pagado</option>
        <option value="adeuda">Adeuda</option>
    `;
    estadoPago.onchange = calcularTotalAdeudado;

    const eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.onclick = () => {
        fila.remove();
        calcularTotalAdeudado();
    };

    fila.appendChild(crearCelda(select));
    fila.appendChild(crearCelda(precio));
    fila.appendChild(crearCelda(cantidad));
    fila.appendChild(crearCelda(total));
    fila.appendChild(crearCelda(estadoPago));
    fila.appendChild(crearCelda(eliminar));

    tabla.appendChild(fila);
    calcularTotalAdeudado();
}

function crearCelda(el) {
    const td = document.createElement("td");
    td.appendChild(el);
    return td;
}

function actualizarPrecioUnitario(fila) {
    const select = fila.cells[0].children[0];
    const precio = productos[select.value];
    fila.cells[1].children[0].value = precio.toFixed(2);
    actualizarTotalFila(fila);
}

function actualizarTotalFila(fila) {
    const precio = parseFloat(fila.cells[1].children[0].value) || 0;
    const cantidad = parseInt(fila.cells[2].children[0].value) || 0;
    const total = precio * cantidad;
    fila.cells[3].children[0].value = total.toFixed(2);
    calcularTotalAdeudado();
}

function calcularTotalAdeudado() {
    const tabla = document.getElementById("consumos-body");
    let total = 0;

    Array.from(tabla.rows).forEach(fila => {
        const estado = fila.cells[4].children[0].value;
        const totalFila = parseFloat(fila.cells[3].children[0].value) || 0;
        if (estado === "adeuda") {
            total += totalFila;
        }
    });

    document.getElementById("total-adeudado").innerText = total.toFixed(2);
}
