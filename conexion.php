<?php
// Datos de conexión a la base de datos
$host = 'localhost';
$dbname = 'mydb';
$username = 'root';
$password = '';

try {
    // Crear una nueva conexión PDO
    $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    // Configurar el modo de error de PDO a excepción
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexión exitosa a la base de datos.";
} catch (PDOException $e) {
    // Manejar errores de conexión
    echo "Error en la conexión: " . $e->getMessage();
}
?>