document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("reservaModal");
    const closeBtn = document.querySelector(".close");
    const cancelarBtn = document.querySelector('button[onclick="closeForm()"]');
    const botonesReserva = document.querySelectorAll(".Btn_Reserva");

    // Mostrar el modal cuando se da clic en cualquier botón "Reservar"
    botonesReserva.forEach(btn => {
        btn.addEventListener("click", () => {
        modal.style.display = "flex";
        });
    });

    // Cerrar modal
    function closeModal() {
        modal.style.display = "none";
        document.getElementById("form-reserva").reset(); // Limpia el formulario
    }

    closeBtn.addEventListener("click", closeModal);
    cancelarBtn.addEventListener("click", closeModal);

    // Validar y enviar reserva
    window.submitReservation = function () {
        const form = document.getElementById("form-reserva");
        const inputs = form.querySelectorAll("input[required], textarea[required]");
        let valid = true;

        inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = "2px solid red";
            valid = false;
        } else {
            input.style.border = "1px solid #ddd";
        }
    });
    
    if (!valid) {
        alert("Por favor completa todos los campos requeridos.");
        return;
    }

      // Aquí puedes enviar los datos con fetch/AJAX si deseas
    alert("Reserva enviada exitosamente.");
    closeModal();
    };

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", e => {
        if (e.target === modal) {
        closeModal();
    }
    });

    // Función global para el botón "Cancelar"
    window.closeForm = closeModal;
});