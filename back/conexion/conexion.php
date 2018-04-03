<?php
class Conexion{
    public $conErr;
    
    private $con;
    private $server = "127.0.0.1";
    private $user = "root";
    private $password = "";
    private $db = "dogoolau";
    private $port = "3306";

    function __construct(){
        $this->con = new mysqli($this->server, $this->user, $this->password, $this->db, $this->port);
        if ($this->con->connect_errno) {
            $this->conErr = $this->con->connect_errno;
            echo "Fallo al conectar a MySQL: (" . $this->con->connect_errno . ") " . $this->con->connect_error;
        }
    }

    function cerrarConexion(){
        return mysqli_close($this->con);
    }

    function consultar($sql){
        $resultado = $this->con->query($sql);
        $res = array();
        while ($fila = $resultado->fetch_assoc()){                
            $res[] = $fila;
        }
        return $res;
    }
}
 ?>