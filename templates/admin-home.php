
            <div class="stats">
                <!-- Habitaciones Disponibles -->
                <div class="card green">
                    <h2>Habitaciones Disponibles</h2>
                    <table id="disponibles-table">
                        <thead>
                            <tr>
                                <th>Habitación</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>
                                    <button class="status-icon" onclick="openForm('101')">📝</button>
                                </td>
                            </tr>
                            <tr>
                                <td>102</td>
                                <td>
                                    <button class="status-icon" onclick="openForm('102')">📝</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <!-- Habitaciones Reservadas -->
                <!-- Habitaciones Reservadas -->
                <div class="card blue">
                    <h2>Habitaciones Reservadas</h2>
                    <table id="reservadas-table">
                        <thead>
                            <tr>
                                <th>Habitación</th>
                                <th>Nombre del Cliente</th>
                                <th>Fecha de Entrada</th>
                                <th>Fecha de Salida</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Se llenará dinámicamente -->
                        </tbody>
                    </table>
                </div>

                
                <!-- Habitaciones Ocupadas -->
                <div class="card orange">
                    <h2>Habitaciones Ocupadas</h2>
                    <table id="ocupadas-table">
                        <thead>
                            <tr>
                                <th>Habitación</th>
                                <th>Nombre del Cliente</th> <!-- Nueva columna opcional -->
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Se llenará dinámicamente -->
                        </tbody>
                    </table>
                </div>
                
                <!-- Habitaciones que requieren atención -->
                <div class="card red">
                    <h2>Habitaciones que requieren atención</h2>
                    <table id="atencion-table">
                        <thead>
                            <tr>
                                <th>Habitación</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Se llenará dinámicamente -->
                        </tbody>
                    </table>
                </div>                
            </div>
        </div>
    
        <!-- Modal de formulario de reserva -->
        <div id="reservation-form" class="modal">
            <div class="modal-content">
                <h3>Reservar Habitación</h3>
                <form id="form-reserva">
                    <label for="fecha-entrada">Fecha de Entrada:</label>
                    <input type="date" id="fecha-entrada" name="fecha-entrada" required>
        
                    <label for="fecha-salida">Fecha de Salida:</label>
                    <input type="date" id="fecha-salida" name="fecha-salida" required>
        
                    <label for="nombre-cliente">Nombre del Cliente:</label>
                    <input type="text" id="nombre-cliente" name="nombre-cliente" required>
        
                    <label for="telefono-cliente">Teléfono:</label>
                    <input type="tel" id="telefono-cliente" name="telefono-cliente" required>
        
                    <label for="correo-cliente">Correo Electrónico:</label>
                    <input type="email" id="correo-cliente" name="correo-cliente" required>
        
                    <label for="departamento-cliente">Departamento:</label>
                    <input type="text" id="departamento-cliente" name="departamento-cliente" required>
        
                    <label for="ciudad-cliente">Ciudad:</label>
                    <input type="text" id="ciudad-cliente" name="ciudad-cliente" required>
        
                    <button type="button" onclick="submitReservation()">Reservar</button>
                    <button type="button" onclick="closeForm()">Cancelar</button>
                </form>
            </div>
        </div>
    <script src="./Static/Js/admin-home.js"></script>
