<?php 
    include("../../conexion/conexion.php");
    session_start();
    $_SESSION["newsession"]=$idUsuario;  
 
    header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
    header("Pragma: no-cache"); // HTTP 1.0.
    header("Expires: 0"); // Proxies.

    $conn = new Conexion();
    $sql = "INSERT INTO Usuario (nombre, apellido, email, password) VALUES ('".$_POST["nombre"]."','".$_POST["apellido"]."','".$_POST["email"]."','".$_POST["password"]."')";
    $razas = $conn->consultar($sql);
    $conn->cerrarConexion();
?>
echo "<script languaje= 'javascript'> window.location='main.html'</script>";	
 
  ?>