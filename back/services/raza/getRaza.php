<?php 
	include ("/opt/lampp/htdocs/dogoo-1/back/services/conexion/conexion.php");
    include("../../dtos/Sex.php");    

    header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
    header("Pragma: no-cache"); // HTTP 1.0.
    header("Expires: 0"); // Proxies.

    //creamos un array
    $sexs = array();

					$resultado = $mysqli->query("SELECT nombre FROM raza");
						if ($resultado->num_rows > 0) {
							while ($fila = $resultado->fetch_assoc()){                
								echo '<option value="'.$fila['i'].'">'.$fila['raza'].'</option>';
					        }
                        }
                ?>