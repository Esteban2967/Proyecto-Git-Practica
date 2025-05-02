<head>
    <link rel="stylesheet" href="./Static/Css/home-reservas.css">
</head> 

<div class="conten-reser">
        <h2>Reservas</h2>

        <table id="habitaciones-listas">
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>N° de Habitaciones</th>
                    <th>Fecha Entrada</th>
                    <th>Fecha Salida</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="tabla-reservas-body">
                <!-- Se llena dinámicamente -->
            </tbody>
        </table>

        <!-- Modal -->
        <div id="detalle-reserva" class="modal">
            <div class="modal-content">
                <span class="close" onclick="cerrarModal()">&times;</span>
                <h3>Detalles de la Reserva</h3>
                <table>
                    <tr><td>Nombre:</td><td><span id="nombre"></span></td></tr>
                    <tr><td>Habitaciones:</td><td id="lista-habitaciones"></td></tr>
                    <tr><td>Cantidad de Habitaciones:</td><td><span id="cantidad"></span></td></tr>
                    <tr><td>Precio Total de la Reserva:</td><td><span id="precio-total-reserva"></span></td></tr>
                    <tr><td>Pago por Adelantado:</td><td><span id="pago-adelantado"></span></td></tr>
                </table>
            </div>
        </div>
    </div>
    <script src="./Static/Js/reservas.js"></script>
