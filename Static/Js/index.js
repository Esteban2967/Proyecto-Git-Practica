// modal.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalButton = document.getElementById("modal-button");
    const closeBtn = document.getElementsByClassName("close")[0];

    const rooms = [
        {
            title: "Habitación Estándar",
            description: "Comodidad y elegancia a un precio accesible.",
            link: "#reservas"
        },
        {
            title: "Suite Deluxe",
            description: "Lujo y espacio para una experiencia inolvidable.",
            link: "#reservas"
        },
        {
            title: "Habitación King",
            description: "Comodidad y elegancia a un precio accesible.",
            link: "#reservas"
        }
    ];

    document.querySelectorAll('.cta').forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const room = rooms[index % rooms.length];
            modalTitle.textContent = room.title;
            modalDescription.textContent = room.description;
            modalButton.href = room.link;
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
