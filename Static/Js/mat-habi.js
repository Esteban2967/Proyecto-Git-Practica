document.addEventListener("DOMContentLoaded", function () {
    const tablaCamas = document.getElementById("tabla-camas");

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-row")) {
            agregarFila();
        } else if (event.target.classList.contains("remove-row")) {
            eliminarFila(event.target);
        }
    });

    function agregarFila() {
        const fila = document.createElement("tr");
        const totalFilas = tablaCamas.getElementsByTagName("tr").length + 1;
        
        fila.innerHTML = `
            <td>${totalFilas}</td>
            <td>
                <select name="tipo_cama[]" required>
                    <option value="individual">Individual</option>
                    <option value="matrimonial">Matrimonial</option>
                    <option value="queen">Queen</option>
                    <option value="king">King</option>
                </select>
            </td>
            <td>
                <button type="button" class="add-row">➕</button>
                <button type="button" class="remove-row">➖</button>
            </td>
        `;
        
        tablaCamas.appendChild(fila);
    }

    function eliminarFila(boton) {
        const fila = boton.closest("tr");
        if (tablaCamas.getElementsByTagName("tr").length > 1) {
            fila.remove();
        }
    }
});


let formularioGuardado = false;
    function crearNuevoFormulario() {
        if (!formularioGuardado) {
            const confirmar = confirm(
            "¿ESTÁS SEGURO QUE QUIERES CREAR UN NUEVO FORMULARIO? EL FORMULARIO ANTERIOR NO HA SIDO GUARDADO CORRECTAMENTE"
        );
        if (!confirmar) {
            return;
        }
        }
        formularioGuardado = false;
        alert("Nuevo formulario creado. Puedes llenarlo ahora.");
    }