document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("reservaModal");
  const closeBtn = document.querySelector(".close");
  const cancelarBtn = document.querySelector('button[onclick="closeForm()"]');
  const botonesReserva = document.querySelectorAll(".Btn_Reserva");

  // Mostrar el modal cuando se da clic en cualquier botón "Reservar"
  botonesReserva.forEach((btn) => {
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
  // Validar y enviar reserva
  window.submitReservation = function () {
    const form = document.getElementById("form-reserva");
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    let valid = true;

    inputs.forEach((input) => {
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

    const data = {
      nombre: document.getElementById("nombre-cliente").value,
      cedula: document.getElementById("cedula-cliente").value,
      telefono: document.getElementById("telefono-cliente").value,
      correo: document.getElementById("correo-cliente").value,
      departamento: document.getElementById("departamento-cliente").value,
      ciudad: document.getElementById("ciudad-cliente").value,
      comentario: document.getElementById("comentario-cliente").value,
      checkin: document.getElementById("fecha-entrada").value, // <-- clave corregida
      checkout: document.getElementById("fecha-salida").value, // <-- clave corregida
    };

    fetch("/proyecto-git-practica/guardar_reserva.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al procesar la reserva.");
      });
  };

  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Función global para el botón "Cancelar"
  window.closeForm = closeModal;
});
