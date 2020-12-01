function onclick_btnEditar(tipoABM, id, nombre, precio, descripcion, direccion, cuit, idCategoria, idProveedor,email,apellido) {
    console.log(tipoABM, id, nombre, precio, descripcion, direccion, cuit, idCategoria, idProveedor,email,apellido);
    let categorias='';
    let proveedores='';
    cargarCategoria.forEach(element => {
        if (idCategoria==element.id) {
            categorias+= `
                <option value="${element.id}" selected>${element.nombre}</option>
            `;
        }else{
            categorias+= `
                <option value="${element.id}" >${element.nombre}</option>
            `;
        }
    });
    cargarProveedor.forEach(element => {
        if (idProveedor==element.id) {
            proveedores+= `
                <option value="${element.id}" selected>${element.nombre}</option>
            `;
        }else{
            proveedores+= `
                <option value="${element.id}">${element.nombre}</option>
            `;
        }
        
    });
    
    document.getElementById('tituloModificar').innerHTML = "Editar " + tipoABM;
    if (tipoABM == "Producto") {
        document.getElementById('btnEditarCancelar').innerHTML =`
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="editarCambios('${tipoABM}')" data-dismiss="modal">Guardar Cambios</button>
        `;
        document.getElementById('bodyModificar').innerHTML = ` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <p>Vista previa</p>
                        <div class="card mx-auto" style="width: 18rem;">
                        <img src="https://1.bp.blogspot.com/-0V5xiGGwhBc/VK0My5TjBTI/AAAAAAAADxY/cQjkOOq9uqM/s1600/manzana-roja.png" class="card-img-top" alt="...">
                        <div class="card-body">
                                <h2 id="vp_Nombre">${nombre}</h2>
                                <h5 id="vp_Precio">$ ${precio}</h5>
                                <p  id="vp_Descripcion"class="card-text">${descripcion}</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                        </div>
                        <input onkeyup="llenarVistaPrevia('vp_Nombre','editarNombre')" id="editarNombre" value="${nombre}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        <input id="idProducto" value="${id}" type="hidden">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Precio</span>
                        </div>
                        <input onkeyup="llenarVistaPrevia('vp_Precio','editarPrecio')" id="editarPrecio" value="${precio}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Descripción</span>
                        </div>
                        <input onkeyup="llenarVistaPrevia('vp_Descripcion','editarDescripcion')" id="editarDescripcion" value="${descripcion}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Categoría</label>
                          </div>
                          <select class="custom-select" id="editarCategoria">
                            ${categorias}
                          </select>
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Proveedor</label>
                          </div>
                          <select class="custom-select" id="editarProveedor">
                            ${proveedores}
                          </select>
                        </div>
                        <div class="input-group">
                            <div class="custom-file">
                              <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                              <label class="custom-file-label" for="inputGroupFile04">Imagen</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (tipoABM == "Categoria") {
        document.getElementById('btnEditarCancelar').innerHTML =`
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="editarCambios('${tipoABM}')" data-dismiss="modal">Guardar Cambios</button>
        `;
        document.getElementById('bodyModificar').innerHTML = ` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                        </div>
                        <input id="editarNombreCategoria" value="${nombre}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        <input id="idCategoria" value="${id}" type="hidden">
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        `;
    } else if (tipoABM == "cliente") {
        document.getElementById('btnEditarCancelar').innerHTML =`
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="editarCambios('${tipoABM}')" data-dismiss="modal">Guardar Cambios</button>
        `;
        document.getElementById('bodyModificar').innerHTML = ` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                            </div>
                            <input id="editarNombreCliente" value="${nombre}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                            <input id="idCliente" value="${id}" type="hidden">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Apellido</span>
                            </div>
                            <input id="editarApellido" value="${apellido}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
                            </div>
                            <input id="editarEmail" value="${email}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        `;
    }
}

/* Función que graba los cambios en la DB -> Se la llama desde el botón "Guardar Cambios" dentro del modal ABM seleccionado */
/* Se le pasa el parámetro tipoABM para saber qué modificar en la DB */
function editarCambios(tipoABM){
         
    tipoABM=tipoABM.toLowerCase();
    
    if (tipoABM=="producto") {
        let id=document.getElementById('idProducto').value;
        let nombreProducto=document.getElementById('editarNombre').value;
        let precioProducto=document.getElementById('editarPrecio').value;
        let descripcionProducto=document.getElementById('editarDescripcion').value;
        let idProveedor=document.getElementById('editarProveedor').value;
        let idCategoria=document.getElementById('editarCategoria').value;
        data = {"tipoABM": tipoABM, "id":id,"nombre":nombreProducto, "precio":precioProducto,"descripcion":descripcionProducto,"idproveedor":idProveedor,"idcategoria":idCategoria};
        
    }else if (tipoABM=="categoria") {
        let nombreCategoria=document.getElementById('editarNombreCategoria').value;
        let idCategoria=document.getElementById('idCategoria').value;
        data = {"tipoABM": tipoABM, "id":idCategoria,"nombre":nombreCategoria};
        
    }else if (tipoABM=="proveedor") {
        let idProveedor=document.getElementById('idProveedor').value;
        let nombreProveedor=document.getElementById('editarNombreProveedor').value;
        let direccionProveedor=document.getElementById('editarDireccion').value;
        let cuitProveedor=document.getElementById('editarCuit').value;
        data = {"tipoABM": tipoABM, "id":idProveedor,"nombre":nombreProveedor,"direccion":direccionProveedor,"cuit":cuitProveedor};
        
    }else if (tipoABM=="misdatos") {
        let nombreEmpresa=document.getElementById('nombreEmpresa').value;
        let direccion=document.getElementById('nombreEmpresa').value;
        let cuit=document.getElementById('nombreEmpresa').value;
        let rubro=document.getElementById('nombreEmpresa').value;
        let logo=document.getElementById('nombreEmpresa').value;
        data = {"tipoABM": tipoABM, "id":1,"nombreEmpresa":nombreEmpresa,"direccion":direccion,"cuit":cuit,"logo":logo};
    }
    console.log(data);
    $.ajax({
        type:"POST",
        url:"adminGestion_editar.php",
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