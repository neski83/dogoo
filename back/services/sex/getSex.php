<?php
    include("../../dtos/Sex.php");    

    header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
    header("Pragma: no-cache"); // HTTP 1.0.
    header("Expires: 0"); // Proxies.

    //creamos un array
    $sexs = array();

    /*
     *lo poblamos con los sexos. Esto en este caso aplica xq
     *no vamos a tener más opciones, pero acá habría q meter 
     *la lógica de la base de datos en otros casos.
    */
    $sexs[]=new Sex(2,"Cualquier Sexo",true);
    $sexs[]=new Sex(1,"Macho",false);
    $sexs[]=new Sex(0,"Hembra",false);

    //lo convertimos en json y lo imprimimos en el servicio
    echo json_encode($sexs);
?>