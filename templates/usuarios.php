<head>
<link rel="stylesheet" href="./Static/Css/usuarios.css">
</head>        

        <div class="container">
            <div class="header-container">
                <button class="add-button">Agregar nuevo Usuario</button>
                <input type="search" class="search-bar" placeholder="Buscar Usuario...">
            </div>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>N° DOCUMENTO</th>
                            <th>NOMBRES DEL USUARIO</th>
                            <th>CELULAR</th>
                            <th>ESTADO</th>
                            <th>OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody id="user-table">
                        <!-- Los usuarios añadidos aparecerán aquí dinámicamente -->
                    </tbody>
                </table>
            </main>
        </div>
    
        <!-- Ventana emergente -->
        <div class="modal" id="user-modal">
            <div class="modal-content">
                <h2>Agregar Usuario</h2>
                <form id="user-form">
                    <label for="document">N° Documento:</label>
                    <input type="text" id="document" name="document" required>
                    
                    <label for="name">Nombre Completo:</label>
                    <input type="text" id="name" name="name" required>
                    
                    <label for="phone">Celular:</label>
                    <input type="text" id="phone" name="phone" required>
                    
                    <button type="submit" >Agregar</button>
                    <button type="button" id="cancel-button">Cancelar</button>
                </form>
            </div>
        </div>
            <script src="./Static/Js/usuarios.js"></script>
        </div>
