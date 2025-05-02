
  <head><!-- <link rel="stylesheet" href="../Static/Css/mant-habi.css" /> -->
    <link rel="stylesheet"href="./Static/Css/mant-habi.css"/>
  </head>
      <!-- CONTENEDOR DEL FORMATO -->
        <div class="scroll">
          <h2>Registrar Habitación</h2>
          <form
            action="guardarHabitacion.php"
            method="POST"
            enctype="multipart/form-data"
          >
            <label for="categoria">Categoría:</label>
            <select for="categoria" id="categoria" name="categoria" required>
              <option value="">Selecciona una opción</option>
              <option value="1">Habitacion Estandar</option>
              <option value="2">Deluxe</option>
              <option value="3">King</option>
            </select>

            <label for="tipo">Tipo:</label>
            <select id="tipo" name="tipo" required>
              <option value="">Selecciona una opción</option>
              <option value="individual">Individual</option>
              <option value="doble">Doble</option>
              <option value="suite">Suite</option>
            </select>

            <div class="capacidad-precio">
              <label for="capacidad">Capacidad:</label>
              <input
                type="number"
                id="capacidad"
                name="capacidad"
                min="1"
                required
              />

              <label for="precio">Precio por Noche ($):</label>
              <input id="precio" name="precio" required />
            </div>

            <label>Amenidades:</label>
            <div class="amenities">
              <input type="checkbox" id="wifi" name="wifi" value="1" />
              <label for="wifi">WiFi</label>

              <input
                type="checkbox"
                id="ventilador"
                name="ventilador"
                value="1"
              />
              <label for="ventilador">Ventilador</label>

              <input type="checkbox" id="tv" name="tv" value="1" />
              <label for="tv">TV</label>

              <input type="checkbox" id="tina" name="tina" value="1" />
              <label for="tina">Tina</label>

              <input type="checkbox" id="bar" name="bar" value="1" />
              <label for="bar">Bar</label>

              <input type="checkbox" id="aseo" name="aseo" value="1" />
              <label for="aseo">Aseo</label>

              <input
                type="checkbox"
                id="caja_fuerte"
                name="caja_fuerte"
                value="1"
              />
              <label for="caja_fuerte">Caja Fuerte</label>

              <input
                type="checkbox"
                id="aire_acondicionado"
                name="aire_acondicionado"
                value="1"
              />
              <label for="aire_acondicionado">Aire Acondicionado</label>
            </div>

            <label>Tipos de Cama:</label>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo de Cama</th>
                  <th>Acciones Cama</th>
                </tr>
              </thead>
              <tbody id="tabla-camas">
                <tr>
                  <td>1</td>
                  <td>
                    <select name="tipo_cama[]" required>
                      <option value="1">Individual</option>
                      <option value="2">Matrimonial</option>
                      <option value="3">Queen</option>
                      <option value="4">King</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" class="add-row">➕</button>
                    <button type="button" class="remove-row">➖</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <label for="fotos">Fotos:</label>
            <input type="file" id="fotos" name="fotos[]" multiple />

            <div class="BOTONES">
              <button type="submit" onclick="guardarFormulario()">
                Guardar
              </button>
              <button type="button" onclick="crearNuevoFormulario()">
                Crear Nuevo Formulario
              </button>
            </div>
          </form>
        </div>
    <script src="./Static/Js/mat-habi.js"></script>
