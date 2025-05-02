<head>
    <link rel="stylesheet" href="./Static/Css/salidas.css">
</head>

        <div class="conten-reser">
            <h2>Clientes Listos para Salida</h2>
            
            <table id="habitaciones-listas">
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad de Habitaciones</th>
                    <th>Fecha de Entrada</th>
                    <th>Fecha de Salida</th>
                    <th>Acciones</th>
                </tr>
                <!-- Datos de las reservas se cargarán dinámicamente -->
            </table>
        
            <!-- Ventana emergente -->
            <div id="verificacion-salida" class="modal" style="display: none;">
                <div class="modal-content">
                    <span class="close" onclick="cerrarModal()">&times;</span>
                    <h3>Verificación de Salida</h3>
                    <table>
                        <tr>
                            <td>Nombre:</td>
                            <td><span id="nombre"></span></td>
                        </tr>
                        <tr>
                            <td>Habitaciones:</td>
                            <td id="lista-habitaciones"></td>
                        </tr>
                        <tr>
                            <td>Cantidad de Habitaciones:</td>
                            <td><span id="cantidad"></span></td>
                        </tr>
                        <tr>
                            <td>Precio Total de la Reserva:</td>
                            <td><span id="precio-total-reserva"></span></td>
                        </tr>
                    </table>
                    <div id="consumos-extras">
                        <h4>Consumos Extras</h4>
                        <table id="tabla-consumos">
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                            <!-- Consumos precargados -->
                            <tr>
                                <td>Bebida</td>
                                <td>5.00</td>
                                <td>2</td>
                                <td>10.00</td>
                            </tr>
                            <tr>
                                <td>Snack</td>
                                <td>3.00</td>
                                <td>3</td>
                                <td>9.00</td>
                            </tr>
                        </table>
                    </div>
                    <p><strong>Total Final:</strong> $<span id="total-final"></span></p>
                    <button type="button" onclick="confirmarSalida()">Dar Salida</button>
                </div>
            

        </div>
    
    <script src="./Static/Js/salidas.js"></script>
