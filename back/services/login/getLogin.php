<?php 
	include("../../conexion/conexion.php");

    header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
    header("Pragma: no-cache"); // HTTP 1.0.
    header("Expires: 0"); // Proxies.
    $email=$_POST['email1']; // Fetching Values from URL.
    $pass= $_POST['password']; 
    $conn = new Conexion();
    $sql = "SELECT * FROM usuario WHERE email='$email' AND pass='$password'";
    $data = $conn->consultar($sql);
    if($data==1){
    echo "Successfully Logged in...";
    }else{
    echo "Email or Password is wrong...!!!!";
    }
    $conn->cerrarConexion();
    ?>