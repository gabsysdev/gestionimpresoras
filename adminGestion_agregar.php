<?php
    
    include("conexion.php");
 
    $tipoDeABM=$_POST['tipoABM'];
    $nombre=$_POST['nombre'];
    
    if ($tipoDeABM=="producto") {
        $precio=$_POST['precio'];
        $descripcion=$_POST['descripcion'];
        $idCategoria=$_POST['idcategoria'];
        $idProveedor=$_POST['idproveedor'];
        $query="insert into $tipoDeABM (id_producto, nombre, precio, descripcion, id_categoria, id_proveedor, eliminado) 
        values (null, '$nombre', '$precio', '$descripcion', '$idCategoria', '$idProveedor', 0)";
        echo $query;
    }else if ($tipoDeABM=="cliente"){
        $email=$_POST['email'];
        $apellido=$_POST['apellido'];
        $query="insert into $tipoDeABM (id_cliente,nombre,apellido,email,eliminado) values (null,'$nombre','$apellido','$email',0)";
    }else if ($tipoDeABM=="categoria") {
        $query= "insert into $tipoDeABM (id_categoria, nombre, eliminado) 
        values (null, '$nombre', 0)";
        
    }else {
        $direccion=$_POST['direccion'];
        $cuit=$_POST['cuit'];
        $query = "insert into $tipoDeABM (id_proveedor, nombre, direccion, eliminado, cuit) 
        values (null, '$nombre', '$direccion', 0, '$cuit')";
        
    }
    $ejecutarEditarProv=mysqli_query($conexion,$query);
    echo $ejecutarEditarProv;
    
?>