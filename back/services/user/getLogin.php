<?php 
	include ("/opt/lampp/htdocs/dogoo-1/back/services/conexion/conexion.php");
    include("../../dtos/User.php");    

    header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
    header("Pragma: no-cache"); // HTTP 1.0.
    header("Expires: 0"); // Proxies.

    $res= mysql_query("select * from Usuario where email = '".$_POST["email"]."'");
    $cta= mysql_num_rows($res);
	if ($cta > 0)
	{
		$row= mysql_fetch_array($res);
	}  else 
    echo "<script languaje= 'javascript'> window.location='main.html'</script>";	


    $res1= mysql_query("select * FROM Usuario WHERE email = '".$_POST["email"]."' AND password='".$_POST["password"]."'");
    $cta= mysql_num_rows($res1);
    	if ($cta > 0)
	{
		$row1= mysql_fetch_array($res1);
		echo "<script languaje= 'javascript'> window.location='main.html'</script>";	
	} else 
    echo "<script languaje= 'javascript'> window.location='login.html'</script>";	

    $enc=md5($_post["password"]);
    if ($enc==$row["password"])
        {
        $_session["usuario"]=$row["email"];
        }
    $_session["usuario"]= $mail;


    ?>