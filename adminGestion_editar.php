<?php
    
    include("conexion.php");
 
    $tipoDeABM=$_POST['tipoABM'];
    $id=$_POST['id'];
    
    if ($tipoDeABM=="producto") {
        $nombre=$_POST['nombre'];
        $precio=$_POST['precio'];
        $descripcion=$_POST['descripcion'];
        $idcategoria=$_POST['idcategoria'];
        $idproveedor=$_POST['idproveedor'];
        $queryProd="update $tipoDeABM set nombre = '$nombre', precio = '$precio', descripcion = '$descripcion', id_categoria = '$idcategoria',
        id_proveedor = '$idproveedor' where id_producto='$id'";
        $ejecutarEditarProd=mysqli_query($conexion,$queryProd);
        
    }else if ($tipoDeABM=="categoria") {
        $nombre=$_POST['nombre'];
        $queryCate= "update $tipoDeABM set nombre = '$nombre' where id_categoria='$id'";
        $ejecutarEditarCate=mysqli_query($conexion,$queryCate);
    }else if($tipoDeABM=="alquiler"){
        $observacion=$_POST['observacion'];
        $fec_alquilado=$_POST['fechaInicio'];
        $fec_devuelto=$_POST['fechaFin'];
        $queryAlq= "update $tipoDeABM set observacion = '$observacion', fec_alquilado='$fec_alquilado', fec_devolucion='$fec_devuelto' where id_alquiler='$id'";
        $ejecutarEditarAlq=mysqli_query($conexion,$queryAlq);
    }else {
        $nombre=$_POST['nombre'];
        $direccion=$_POST['direccion'];
        $cuit=$_POST['cuit'];
        $queryProv = "update $tipoDeABM set nombre = '$nombre', direccion = '$direccion', cuit = '$cuit' where id_proveedor='$id'";
        $ejecutarEditarProv=mysqli_query($conexion,$queryProv);
    }
    
    echo " salgo de editar.php";
    
?>