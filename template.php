<?php
$title = "Panel de Control";
$page = $_GET['page'] ?? 'admin-home'; // Página por defecto

include('includes/header.php');
include('includes/sidebar.php');
?>

<div class="main-content">
    <?php include("templates/$page.php"); ?>
</div>

<?php include('includes/footer.php'); ?>
