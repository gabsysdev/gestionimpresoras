<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Productos</title>
    <div id="nav-placeholder"></div>
    <style>
        html,body{
            height:100%;
            background-color: #f0f2f4;
        }
        .menuProductos, .row{
            height:100%;
        }
    </style>

</head>
<body>  
    <div class="container-fluid menuProductos">
        <div class="row">
            <div class="col-md-3 bg-secondary text-dark">
                <div class="list-group mt-3">
                    <a class="list-group-item list-group-item-action" data-toggle="list" onclick="mostrarTabla('abmProductos')">Equipos</a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" onclick="mostrarTabla('abmCategorías')">Categorías</a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" onclick="mostrarTabla('abmProveedores')">Proveedores</a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" onclick="mostrarTabla('Reportes')">Alquileres</a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" onclick="mostrarTabla('misDatos')">Mis datos</a>
                </div>
            </div>
            <div class="col-md-9">
                <div id="moduloDerecho">
                    <?php include("abmProductos.php");?>
                </div>
                <div id="moduloDatos" style="visibility:hidden">
                    <?php include("misDatos.php");?>
                </div>
            </div>                        
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="adminGestion_editar.js"></script>
    <script src="adminGestion.js"></script>
    <script src="adminGestion_agregar.js"></script>
    <script src="adminGestion_eliminar.js"></script>
</body>
</html>


<script>
$(function(){
  $("#nav-placeholder").load("navbaradmin.html");
});
</script>