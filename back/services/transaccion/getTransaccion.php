<?php 
include ("conexion.php");

					$resultado = $mysqli->query("SELECT nombre FROM tipoTransaccion");
						if ($resultado->num_rows > 0) {
							while ($fila = $resultado->fetch_assoc()){                
								echo '<option value="'.$fila['i'].'">'.$fila['nombre'].'</option>';
					        }
                        }
                ?>