    <link rel="stylesheet" href="./static/css/productos.css">
    <div class="container">
        <h2>Inventario de Productos</h2>

        <button id="btnAbrirModal">Agregar Producto</button>

        <table id="tablaInventario">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Cantidad</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <!-- Productos se agregarán aquí -->
            </tbody>
        </table>
    </div>

    <!-- Modal -->
    <div id="modal" class="modal">
        <div class="modal-contenido">
            <span id="cerrarModal" class="cerrar">&times;</span>
            
            <h3>Agregar nuevo producto</h3>
            <form id="formularioProducto">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>

                <label for="categoria">Categoría:</label>
                <select id="categoria" name="categoria" required>
                    <option value="">Selecciona una categoría</option>
                    <option value="Electrónica">Electrónica</option>
                    <option value="Ropa">Ropa</option>
                    <option value="Alimentos">Alimentos</option>
                    <option value="Otros">Otros</option>
                </select>

                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" name="cantidad" min="0" required>

                <label for="descripcion">Descripción:</label>
                <textarea id="descripcion" name="descripcion" rows="4" required></textarea>

                <label for="precio">Precio:</label>
                <input type="number" id="precio" name="precio" min="0" required>

                <button type="submit">Agregar Producto</button>

                <div id="mensajeError" class="error"></div>
            </form>
        </div>
    </div>


    <script src="./static/js/productos.js"></script>
