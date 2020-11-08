function onclick_btnEliminar(tipoABM,id){
    document.getElementById('tituloModalEliminar').innerHTML="Eliminar "+ tipoABM;
    document.getElementById('btnEliminarCancelar').innerHTML=`
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-danger" onclick="onclick_btnConfirmarEliminar('${tipoABM}','${id}')" data-dismiss="modal">Eliminar</button>
    `;
}
function onclick_btnConfirmarEliminar(tipoABM,id){
    let data = {"tipoABM": tipoABM,"id":id};
    $.ajax({
        type:"POST",
        dateType:"json",
        url:"eliminarRegistro.php",
        data:data,
        success:function(respuesta){
            if (tipoABM=="producto") {
                mostrarTabla("abmProductos");
                console.log(respuesta);    
            }else if(tipoABM=="categoria"){
                mostrarTabla("abmCategorías");
                console.log(respuesta); 
            }else if(tipoABM=="proveedor"){
                mostrarTabla("abmProveedores");
                console.log(respuesta); 
            }
        }
    })
}