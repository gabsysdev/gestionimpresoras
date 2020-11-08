<?php

    include("conexion.php");

    $id=$_POST['id'];
    $tipoDeABM=$_POST['tipoABM'];

    if ($tipoDeABM=="producto") {
        echo "entre a producto";
        $queryEliminarProd="update $tipoDeABM set eliminado=1 where id_producto=$id";
        $ejecutarEliminarProd=mysqli_query($conexion,$queryEliminarProd);
    }else{
        $idRelacion="id_".$tipoDeABM;

        $query="select * from producto where $idRelacion=$id and eliminado=0";
        
        $ejecutar=mysqli_query($conexion,$query);
        if(mysqli_num_rows($ejecutar)==0)
        {
            $query2="update $tipoDeABM set eliminado=1 where $idRelacion=$id";
            
            $ejecutar2=mysqli_query($conexion,$query2);
        }
    }
    echo "salgo de eliminar.php";
    
?>