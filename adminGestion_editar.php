<?php
    
    include("conexion.php");
 
    $tipoDeABM=$_POST['tipoABM'];
    $id=$_POST['id'];
    $nombre=$_POST['nombre'];
    
    if ($tipoDeABM=="producto") {
        $precio=$_POST['precio'];
        $descripcion=$_POST['descripcion'];
        $idcategoria=$_POST['idcategoria'];
        $idproveedor=$_POST['idproveedor'];
        $queryProd="update $tipoDeABM set nombre = '$nombre', precio = '$precio', descripcion = '$descripcion', id_categoria = '$idcategoria',
        id_proveedor = '$idproveedor' where id_producto='$id'";
        $ejecutarEditarProd=mysqli_query($conexion,$queryProd);
        
    }else if ($tipoDeABM=="categoria") {
        $queryCate= "update $tipoDeABM set nombre = '$nombre' where id_categoria='$id'";
        $ejecutarEditarCate=mysqli_query($conexion,$queryCate);
    }else {
        $direccion=$_POST['direccion'];
        $cuit=$_POST['cuit'];
        $queryProv = "update $tipoDeABM set nombre = '$nombre', direccion = '$direccion', cuit = '$cuit' where id_proveedor='$id'";
        $ejecutarEditarProv=mysqli_query($conexion,$queryProv);
    }
    
    echo " salgo de editar.php";
    
?>