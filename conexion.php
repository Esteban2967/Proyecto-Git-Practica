<?php
$host = 'localhost';
$dbname = 'mydb';
$username = 'root';
$password = 'toor';

// Crear conexión MySQLi
$conn = new mysqli($host, $username, $password, $dbname);

// Verificar si hay error en la conexión
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

// Opcional: configurar charset
$conn->set_charset("utf8");
