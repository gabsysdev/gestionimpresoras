<?php

    include("conexion.php");

    $nombre = $_POST['nombre'];
    $pass=$_POST['pass'];
    
    $query="select * from usuario where nombre='$nombre' and password='$pass'";

    $ejecutar=mysqli_query($conexion,$query);

    $cant = mysqli_num_rows($ejecutar);
    
    if($cant==1){
        $reg=mysqli_fetch_array($ejecutar);
        session_start();
        $_SESSION['id']=$reg['id_usuario'];
        echo 1;
    }else{
        echo "Datos incorrectos";
    }

?>