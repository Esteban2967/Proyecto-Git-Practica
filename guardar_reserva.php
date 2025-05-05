<?php
include 'conexion.php';
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (
    isset(
        $data["cedula"],
        $data["nombre"],
        $data["telefono"],
        $data["correo"],
        $data["departamento"],
        $data["ciudad"],
        $data["checkin"],
        $data["checkout"]
    )
) {
    $cedula = $data["cedula"];
    $nombre = $data["nombre"];
    $telefono = $data["telefono"];
    $correo = $data["correo"];
    $departamento = $data["departamento"];
    $ciudad = $data["ciudad"];
    $fechaEntrada = $data["checkin"];
    $fechaSalida = $data["checkout"];
    $comentario = isset($data["comentario"]) ? $data["comentario"] : '';
    $direccion = "";
    $contrasena = "";

    try {
        $conn->begin_transaction();

        // Insertar en personas
        $stmt1 = $conn->prepare("INSERT INTO personas (cedula, nombre, telefono, direccion, correo, contrasena)
                                 VALUES (?, ?, ?, ?, ?, ?)");
        $stmt1->bind_param("isisss", $cedula, $nombre, $telefono, $direccion, $correo, $contrasena);
        $stmt1->execute();

        // Insertar en clientes
        $stmt2 = $conn->prepare("INSERT INTO clientes (departamento, ciudad, personas_cedula)
                                 VALUES (?, ?, ?)");
        $stmt2->bind_param("ssi", $departamento, $ciudad, $cedula);
        $stmt2->execute();

        // Obtener ID del cliente recién insertado
        $idCliente = $conn->insert_id;

        // Obtener un recepcionista disponible
        // Verificar si hay un recepcionista disponible
        $result = $conn->query("SELECT idrecepcionistas FROM recepcionistas WHERE estado = 1 LIMIT 1");
        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $idrecepcionista = $row['idrecepcionistas'];
        } else {
            // Maneja el caso en el que no hay recepcionistas disponibles
            $idrecepcionista = null; // O maneja de otra forma (puedes asignar un valor predeterminado o devolver un mensaje de error)
            throw new Exception("No hay recepcionistas disponibles.");
        }

        // Insertar en reservas
        $stmt = $conn->prepare("INSERT INTO reservas (fecha, checkin, checkout, comentario, estado, clientes_idclientes, recepcionistas_idrecepcionistas, abono)
                        VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?)");
        $estado = 1; // Confirmada por defecto
        $abono = 0.0;
        $stmt->bind_param("sssiiid", $fechaEntrada, $fechaSalida, $comentario, $estado, $idCliente, $idrecepcionista, $abono);
        $stmt->execute();

        $conn->commit();

        echo json_encode(["success" => true, "message" => "Reserva realizada con éxito."]);
    } catch (Exception $e) {
        $conn->rollback();
        echo json_encode(["success" => false, "message" => "Error al guardar la reserva: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Datos incompletos."]);
}
