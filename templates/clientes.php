<head>
    <link rel="stylesheet" href="./Static/Css/clientes.css">
</head>
<body>
    <div class="conten-reser">
        <h2>Huéspedes Activos</h2>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Entrada</th>
                    <th>Salida</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="tabla-reservas">
                <!-- JS llenará filas -->
            </tbody>
        </table>
    </div>

    <!-- Modal -->
    <div id="modal-consumo" class="modal">
        <div class="modal-content">
            <span class="close" onclick="cerrarModal()">&times;</span>
            <h3>Detalle de Hospedaje y Consumos</h3>

            <table>
                <tr><td>Nombre:</td><td><span id="nombre"></span></td></tr>
                <tr><td>Habitaciones:</td><td id="lista-habitaciones"></td></tr>
                <tr><td>Cantidad:</td><td><span id="cantidad"></span></td></tr>
                <tr><td>Precio Total:</td><td><span id="precio-total-reserva"></span></td></tr>
                <tr><td>Pago Anticipado:</td><td><span id="pago-adelantado"></span></td></tr>
            </table>

            <h4>Agregar Consumo</h4>
            <table id="tabla-consumos">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Pago</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody id="consumos-body">
                    <!-- filas dinámicas -->
                </tbody>
            </table>

            <button onclick="agregarFila()">Agregar Producto</button>
            <p><strong>Total Adeudado:</strong> $<span id="total-adeudado">0.00</span></p>
        </div>
    </div>
    <script src="./Static/Js/clientes.js"></script>
