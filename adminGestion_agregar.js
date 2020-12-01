function onclick_btnAgregar(tipoABM){

    let categorias='';
    let proveedores='';
    let prodLibre='';
    cargarCategoria.forEach(element => {
        categorias+= `
            <option value="${element.id}" >${element.nombre}</option>
        `;        
    });
    cargarProveedor.forEach(element => {
        proveedores+= `
                <option value="${element.id}" >${element.nombre}</option>
        `;
    });
    productosLibres+=']';
    console.log(productosLibres);
    productosLibres=JSON.parse(productosLibres);
    console.log(productosLibres,cargarProveedor);
    productosLibres.forEach(element => {//terminar
        if (element.id==0) {
            prodLibre+= `
                <option value="${element.id}" >${element.nombre}</option>
            `;
        }else{
            prodLibre+= `
                    <option value="${element.id}" >Nombre: ${element.nombre} - Serial: ${element.serial}</option>
            `;
        }
    });
    document.getElementById('tituloAgregar').innerHTML="Agregar " +tipoABM;
    if (tipoABM=="producto") {
        document.getElementById('tituloAgregar').innerHTML="Agregar equipo";
        document.getElementById('btnAgregarCancelar').innerHTML=`
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button onclick="agregarRegistro('${tipoABM}')" type="button" class="btn btn-primary" data-dismiss="modal">Agregar</button>
        `;

        document.getElementById('bodyAgregar').innerHTML=` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <p>Vista previa</p>
                        <div class="card mx-auto" style="width: 18rem;">
                        <img src="https://1.bp.blogspot.com/-0V5xiGGwhBc/VK0My5TjBTI/AAAAAAAADxY/cQjkOOq9uqM/s1600/manzana-roja.png" class="card-img-top" alt="...">
                        <div class="card-body">
                                <h2 id="vp_Nombre"></h2>
                                <h5 id="vp_Precio">$ </h5>
                                <p  id="vp_Descripcion"class="card-text"></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                        </div>
                        <input onkeyup="llenarVistaPrevia('vp_Nombre','nombreProducto')" id="nombreProducto"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Precio</span>
                        </div>
                        <input onkeyup="llenarVistaPrevia('vp_Precio','agregarPrecio')" id="agregarPrecio"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Descripción</span>
                        </div>
                        <input onkeyup="llenarVistaPrevia('vp_Descripcion','agregarDescripcion')" id="agregarDescripcion"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Categoría</label>
                          </div>
                          <select class="custom-select" id="agregarCategoria">
                            ${categorias}
                          </select>
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Proveedor</label>
                          </div>
                          <select class="custom-select" id="agregarProveedor">
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
    }else if(tipoABM=="categoria"){
        document.getElementById('btnAgregarCancelar').innerHTML=`
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button onclick="agregarRegistro('${tipoABM}')" type="button" class="btn btn-primary" data-dismiss="modal">Agregar</button>
        `;

        document.getElementById('bodyAgregar').innerHTML=` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                        </div>
                        <input id="agregarNombreCategoria"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        `;
    }else if(tipoABM=="proveedor"){
        document.getElementById('btnAgregarCancelar').innerHTML=`
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button onclick="agregarRegistro('${tipoABM}')" type="button" class="btn btn-primary" data-dismiss="modal">Agregar</button>
        `;

        document.getElementById('bodyAgregar').innerHTML=` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                            </div>
                            <input id="agregarNombreProv"   type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Dirección</span>
                            </div>
                            <input id="agregarDireccion"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Cuit</span>
                            </div>
                            <input id="agregarCuit" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        `;
    }else if (tipoABM=='cliente'){
        document.getElementById('btnAgregarCancelar').innerHTML=`
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button onclick="agregarRegistro('${tipoABM}')" type="button" class="btn btn-primary" data-dismiss="modal">Agregar</button>
        `;
        document.getElementById('bodyAgregarCliente').innerHTML=` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                            </div>
                            <input id="agregarNombreCliente"   type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Apellido</span>
                            </div>
                            <input id="agregarApellidoCliente"   type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
                            </div>
                            <input id="agregarEmailCliente"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        `;
    }else if (tipoABM=="alquiler") {
        console.log("Activamos boton Nuevo Alquiler");

        //Agregamos los botones de agregar y cerrar al Modal
        document.getElementById('btnAgregarCancelar').innerHTML=`
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button onclick="agregarRegistro('${tipoABM}')" type="button" class="btn btn-primary" data-dismiss="modal">Agregar</button>
        `;

        //traemos de la BD los productos en estado "Libre" al Modal

        document.getElementById('bodyAgregar').innerHTML=` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Productos Libres</label>
                          </div>
                          <select class="custom-select" id="productoLibreId">
                            ${prodLibre}
                          </select>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                            </div>
                            <input id="agregarNombreProv"   type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Dirección</span>
                            </div>
                            <input id="agregarDireccion"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Cuit</span>
                            </div>
                            <input id="agregarCuit" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        `;
    }
}
function agregarRegistro(tipoABM){
         
    tipoABM=tipoABM.toLowerCase();
    
    if (tipoABM=="producto") {
        let nombreProducto=document.getElementById('nombreProducto').value;
        let precioProducto=document.getElementById('agregarPrecio').value;
        let descripcionProducto=document.getElementById('agregarDescripcion').value;
        let idProveedor=document.getElementById('agregarProveedor').value;
        let idCategoria=document.getElementById('agregarCategoria').value;
        data = {"tipoABM": tipoABM, "nombre":nombreProducto, "precio":precioProducto,"descripcion":descripcionProducto,"idproveedor":idProveedor,"idcategoria":idCategoria};
        
    }else if (tipoABM=="categoria") {
        let nombreCategoria=document.getElementById('agregarNombreCategoria').value;
        data = {"tipoABM": tipoABM, "nombre":nombreCategoria};
        
    }else if (tipoABM=="proveedor") {
        let nombreProveedor=document.getElementById('agregarNombreProv').value;
        let direccionProveedor=document.getElementById('agregarDireccion').value;
        let cuitProveedor=document.getElementById('agregarCuit').value;
        data = {"tipoABM": tipoABM, "nombre":nombreProveedor,"direccion":direccionProveedor,"cuit":cuitProveedor};
        
    }else if (tipoABM=="cliente") {
        let nombreCliente=document.getElementById('agregarNombreCliente').value;
        let apellidoCliente=document.getElementById('agregarApellidoCliente').value;
        let emailCliente=document.getElementById('agregarEmailCliente').value;
        data = {"tipoABM": tipoABM, "nombre":nombreCliente,"apellido":apellidoCliente,"email":emailCliente};
    }
    console.log(data,tipoABM);
    $.ajax({
        type:"POST",
        url:"adminGestion_agregar.php",
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
            }else if(tipoABM=="cliente"){
                mostrarTabla("abmCliente");
                console.log(respuesta);
            }
        }
    })  
}