<?php 
include ("conexion.php");

					$resultado = $mysqli->query("SELECT id FROM provincia");
						if ($resultado->num_rows > 0) {
							while ($fila = $resultado->fetch_assoc()){                
								echo '<option value="'.$fila['i'].'">'.$fila['id'].'</option>';
					        }
                        }
                ?>