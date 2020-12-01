cargarCategoria=[];
cargarProveedor=[];
// Lista de productos en estado libre
productosLibres='[{"id":"0","nombre":"(Seleccionar Producto)","serial":"","fec_alquilado":"20201101","fec_devolucion":"20201121","estado":"1","id_producto":"1"}';
function mostrarTabla(abm){ 
    // carga de array categoria
    dataCategoria={"tipoDeConsulta": "abmCategorías"};
    $.ajax({
        type:"POST",
        dateType:"json",
        url:"traerABM.php",
        data:dataCategoria,
        success:function(respuestaCat){
            respuestaCat=JSON.parse(respuestaCat);
            cargarCategoria=respuestaCat;
        }
    });
    // carga de array proveedor
    dataProveedor={"tipoDeConsulta": "abmProveedores"};
    $.ajax({
        type:"POST",
        dateType:"json",
        url:"traerABM.php",
        data:dataProveedor,
        success:function(respuestaProv){
            respuestaProv=JSON.parse(respuestaProv);
            cargarProveedor=respuestaProv;
        }
    });

    document.getElementById('btnAgregar').style.visibility="visible";
    if (abm==="abmProductos") {
        tablaAbmVisible();
        document.getElementById('moduloDatos').style.visibility="hidden";
        document.getElementById('tituloDelAbm').innerHTML="ABM Equipo";
        document.getElementById('tituloAgregar').innerHTML="Agregar Equipo";
        document.getElementById('btnAgregar').innerHTML=`
        <button type="button" onclick="onclick_btnAgregar('producto')" class="btn btn-primary mb-3" data-toggle="modal" data-target="#modalAgregar">
            Agregar Equipo
        </button>
        `;
        
        document.getElementById('tableHead').innerHTML=`
                                                        <th>Id</th>
                                                        <th>Nombre</th>
                                                        <th>Precio</th>
                                                        <th>Descripcion</th>
                                                        <th>Categoría</th>
                                                        <th>Proveedor</th>
                                                        <th>Editar</th>
                                                        <th>Eliminado</th>
        `;
    }else if (abm==="abmCategorías"){
        tablaAbmVisible();
        document.getElementById('tituloDelAbm').innerHTML="ABM Categorías";
        document.getElementById('btnAgregar').innerHTML=`
        <button type="button" onclick="onclick_btnAgregar('categoria')" class="btn btn-primary mb-3" data-toggle="modal" data-target="#modalAgregar">
            Agregar categoria
        </button>
        `;
        document.getElementById('tableHead').innerHTML=`
                                                        <th>Id</th>
                                                        <th>Nombre</th>
                                                        <th>Editar</th>
                                                        <th>Eliminado</th>
        `;
    }else if (abm==="abmProveedores"){
        tablaAbmVisible();
        document.getElementById('tituloDelAbm').innerHTML="ABM Proveedores";
       document.getElementById('btnAgregar').innerHTML=`
        <button type="button" onclick="onclick_btnAgregar('proveedor')" class="btn btn-primary mb-3" data-toggle="modal" data-target="#modalAgregar">
            Agregar proveedor
        </button>
        `;
        document.getElementById('tableHead').innerHTML=`
                                                        <th>Id</th>
                                                        <th>Nombre</th>
                                                        <th>Direccion</th>
                                                        <th>Cuit</th>
                                                        <th>Editar</th>
                                                        <th>Eliminado</th>
        `;
    }else if (abm==="Reportes"){
        misDatosInvisible();
        document.getElementById('tituloDelAbm').innerHTML="Reportes";
        document.getElementById('tableHead').innerHTML=`
                                                        <th>Nombre</th>
                                                        <th>Eliminado</th>
        `;
    }else if(abm==="misDatos"){
        misDatosVisible();
    }else if (abm=="alquiler") {
        console.log("mostrar tabla alquiler");
        document.getElementById('tituloDelAbm').innerHTML="Alquileres";
        document.getElementById('estadoReferencia').innerHTML=`
        Libres <span id="contLibre" class="badge badge-success">0</span>
        Alquilados <span id="contAlquilados" class="badge" style="background-color: rgb(238, 255, 6);">0</span>
        Prox. a devolver <span id="contProxADev" class="badge" style="background-color: rgb(255, 168, 6);">0</span>
        Sin devolver <span id="contSinDevolver" class="badge badge-danger">0</span>
        `;
        document.getElementById('btnAgregar').innerHTML=`
        <button type="button" onclick="onclick_btnAgregar('alquiler')" class="btn btn-primary mb-3" data-toggle="modal" data-target="#modalAgregar">
            Nuevo alquiler
        </button>
        `;
        document.getElementById('tableHead').innerHTML=`
                                                        <th>Equipo</th>
                                                        <th>Serial</th>
                                                        <th>Fecha alquiler</th>
                                                        <th>Fecha devolución</th>
                                                        <th>Estado</th>
                                                        <th>Más info</th>
        `;
    }else if (abm=="abmCliente") {
        console.log("mostramos tabla Clientes");
        document.getElementById('tituloDelAbmCliente').innerHTML="Alquileres";
        document.getElementById('btnAgregar').innerHTML=`
        <button type="button" onclick="onclick_btnAgregar('cliente')" class="btn btn-primary mb-3" data-toggle="modal" data-target="#modalAgregarCliente">
            Nuevo cliente
        </button>
        `;
        document.getElementById('tableHeadCliente').innerHTML=`
                                                        <th>Nombre</th>
                                                        <th>Apellido</th>
                                                        <th>Email</th>
                                                        <th>Modificar</th>
                                                        <th>Eliminar</th>
        `;
    }
    
    let tipoDeConsulta = abm;

    data = {"tipoDeConsulta": tipoDeConsulta};
    $.ajax({
        type:"POST",
        dateType:"json",
        url:"traerABM.php",
        data:data,
        success:function(respuesta){
            let respuesta2=JSON.parse(respuesta);
            let llenarTabla='';
            if (tipoDeConsulta=='abmProductos') {
                
                respuesta2.forEach(element => {
                    llenarTabla+=`
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.nombre}</td>
                        <td>$ ${element.precio}</td>
                        <td>${element.descripcion}</td>
                        <td>${element.categoria}</td>
                        <td>${element.proveedor}</td>
                        <td>
                            <button 
                            class="btn btn-secondary" 
                            data-toggle="modal" 
                            data-target="#modalModificar" 
                            onclick="onclick_btnEditar(
                                'Producto',
                                '${element.id}',
                                '${element.nombre}',
                                '${element.precio}',
                                '${element.descripcion}',
                                '',
                                '',
                                '${element.id_categoria}',
                                '${element.id_proveedor}','')"
                            >
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </button>
                        </td>
                      <td><button type="button" onclick="onclick_btnEliminar('producto','${element.id}')" class="btn btn-danger" data-toggle="modal" data-target="#modalEliminar">Eliminar</button></td>
                    </tr>
                    `;
                })
            }else if(tipoDeConsulta=='abmCategorías'){
                respuesta2.forEach(element => {
                llenarTabla+=`
                <tr>
                    <td>${element.id}</td>
                    <td>${element.nombre}</td>
                    <td>
                        <button class="btn btn-secondary" data-toggle="modal" data-target="#modalModificar" onclick="onclick_btnEditar('Categoria','${element.id}','${element.nombre}','','','','','')">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </button>
                    </td>
                    <td><button type="button" onclick="onclick_btnEliminar('categoria','${element.id}')" class="btn btn-danger" data-toggle="modal" data-target="#modalEliminar">Eliminar</button></td>
                </tr>
                `;
            });
            }else if (tipoDeConsulta=='abmCliente') {
                respuesta2.forEach(element => {
                    llenarTabla+=`
                    <tr>
                        
                        <td>${element.nombre}</td>
                        <td>${element.apellido}</td>
                        <td>${element.email}</td>
                        <td>
                            <button class="btn btn-secondary" data-toggle="modal" data-target="#modalModificar" onclick="onclick_btnEditar('cliente','${element.id}','${element.nombre}','','','','','','','${element.email}','${element.apellido}')">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </button>
                        </td>
                        <td><button type="button" onclick="onclick_btnEliminar('cliente','${element.id}')" class="btn btn-danger" data-toggle="modal" data-target="#modalEliminar">Eliminar</button></td>
                    </tr>
                    `;
                });
            }else if(tipoDeConsulta=='alquiler'){
                let contLibre = 0;
                let contAlquilados = 0;
                let contProxADev = 0;
                let contSinDevolver = 0;
                respuesta2.forEach(element => {
                    let estado="";
                    let bgEstado="";
                    if(element.estado==1){
                        estado ="Libre";
                        bgEstado='class="bg bg-success text-white text-center"';
                        contLibre += 1;

                        // agrego datos del producto al array productosLibres para luego sugerirlos en el
                        // Modal "Nuevo alquiler" (en adminGestion_agregar.js)
                        console.log(element)
                        productosLibres+=","+JSON.stringify(element);//terminar
                        
                    }else if(element.estado == 2){
                        estado ="Alquilados";
                        bgEstado='class="text-center" style="background-color: rgb(238, 255, 6);"';
                        contAlquilados += 1;
                    }else if(element.estado == 3){
                        estado ="Prox. a devolver";
                        bgEstado='class="text-center" style="background-color: rgb(255, 168, 6);"';
                        contProxADev += 1;
                    }else{
                        estado ="Sin devolver";
                        bgEstado='class="bg bg-danger text-white text-center"';
                        contSinDevolver += 1;
                    }
                    document.getElementById('contLibre').innerHTML= contLibre;
                    document.getElementById('contAlquilados').innerHTML=contAlquilados;
                    document.getElementById('contProxADev').innerHTML=contProxADev;
                    document.getElementById('contSinDevolver').innerHTML=contSinDevolver;
                    let esunjson=JSON.stringify(element);
                llenarTabla+=
                `<tr>
                    <td>${element.nombre}</td>
                    <td>${element.serial}</td>
                    <td>${element.fec_alquilado}</td>
                    <td>${element.fec_devolucion}</td>
                    <td ${bgEstado}>${estado}</td>
                    <td><button class="btn btn-secondary" onclick='btnVerInfo(${esunjson},"${element.nombre}")' class="btn btn-primary mb-3" data-toggle="modal" data-target="#modalModificar">+</button></td>
                </tr>
                `;
                });
                
            }else if(tipoDeConsulta=='abmProveedores'){
                respuesta2.forEach(element => {
                llenarTabla+=
                `<tr>
                    <td>${element.id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.direccion}</td>
                    <td>${element.cuit}</td>
                    <td>
                        <button class="btn btn-secondary" data-toggle="modal" data-target="#modalModificar" onclick="onclick_btnEditar('Proveedor','${element.id}','${element.nombre}','','','${element.direccion}','${element.cuit}')">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </button>
                    </td>
                    <td><button type="button" onclick="onclick_btnEliminar('proveedor','${element.id}')" class="btn btn-danger" data-toggle="modal" data-target="#modalEliminar">Eliminar</button></td>
                </tr>
                `;
                });
            }else if(tipoDeConsulta=='misDatos'){
                respuesta2.forEach(element => {
                    document.getElementById('nombreEmpresa').value=`${element.nombreEmpresa}`;
                    document.getElementById('direccion').value=`${element.direccion}`;
                    document.getElementById('cuit').value=`${element.cuit}`;
                    document.getElementById('rubro').value=`${element.rubro}`;
                })
            }
            document.getElementById('tableBody').innerHTML=llenarTabla;
        }
    })
}
function llenarVistaPrevia(idALlenar,idDelContenido){
    document.getElementById(idALlenar).innerHTML=document.getElementById(idDelContenido).value;
    if (idALlenar=="vp_Precio") {
        document.getElementById(idALlenar).innerHTML="$ "+document.getElementById(idDelContenido).value;
    }
}


function misDatosInvisible(){
    document.getElementById('tituloMisDatos').style.visibility="hidden";
    document.getElementById('moduloDerecho').style.visibility="hidden";
    document.getElementById('btnAgregar').style.visibility="hidden";
    document.getElementById('moduloDatos').style.visibility="hidden"; 
}
function misDatosVisible(){
    document.getElementById('estadoReferencia').innerHTML=``;
    document.getElementById('tituloDelAbm').innerHTML="Mis datos";
    document.getElementById('tableHead').innerHTML=``;
    document.getElementById('moduloDerecho').style.display="none"; 
    document.getElementById('moduloDerecho').style.visibility="hidden";
    document.getElementById('btnAgregar').style.visibility="hidden";
    document.getElementById('moduloDatos').style.display="block"; 
    document.getElementById('moduloDatos').style.visibility="visible"; 
}
function tablaAbmVisible(){
    document.getElementById('btnAgregar').style.visibility="visible";
    document.getElementById('moduloDerecho').style.visibility="visible";
    document.getElementById('moduloDerecho').style.display="block"; 
    document.getElementById('moduloDatos').style.display="none"; 
    document.getElementById('moduloDatos').style.visibility="hidden"; 
}
function tablaAlquileresVisible(){
    document.getElementById('btnAgregar').style.visibility="visible";
    document.getElementById('moduloDerecho').style.visibility="visible";
    document.getElementById('moduloDerecho').style.display="block"; 
    document.getElementById('moduloDatos').style.display="none"; 
    document.getElementById('moduloDatos').style.visibility="hidden"; 
}
function btnVerInfo(objAlquilar,nomProducto){
    // pongo el titulo del modal
    document.getElementById('tituloModificar').innerHTML=nomProducto;
    
    // pongo el contenido del modal
    document.getElementById('bodyModificar').innerHTML=
    `
        <div class="row">
            <div class="col-lg-5">
                imagen
            </div>
            <div class="col-lg-7">
                <p><strong>Serial: </strong>${objAlquilar.serial}</p>
                <p><strong>Fecha de alquiler</strong></p>
                    <label for="inicio">Inicio: </label>
                    <input type="date" id="inicio" name="inicio" value="${objAlquilar.fec_alquilado}">
                
                    <label for="fin">Fin: </label>
                    <input type="date" id="fin" name="fin" value="${objAlquilar.fec_devolucion}">
                <p><strong>Observaciones: </strong></p>
                <textarea class="form-control" id="observaciones" placeholder="Ingrese alguna observacion">${objAlquilar.observacion}</textarea>
                <div id="btnGuardarCambios">
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">

                <div class="card text-center mt-5">
                  <div class="card-header">
                    <h4>Historial de Alquiler</h4>
                  </div>
                  <div class="card-body text-left" id="historialBody">
                    
                  </div>
                </div>
            </div>
        </div>
    `;
    cargarHistorial(objAlquilar);
    let esunjson2=JSON.stringify(objAlquilar);
    //pongo el boton de guardar cambios al modal
    document.getElementById('btnGuardarCambios').innerHTML=`
        <button class="btn btn-success mt-3" onclick='guardarCambios(${esunjson2})' data-dismiss="modal">Guardar cambios</button>
    `;
}

function cargarHistorial(objAlquilar){
    data = {"tipoDeConsulta": "alquilerhistorial","id_producto":objAlquilar.id_producto};
    $.ajax({
        type:"POST",
        dateType:"json",
        url:"traerABM.php",
        data:data,
        success:function(respuesta3){
            let histDeAlquiler='';
            let respuesta2=JSON.parse(respuesta3);
            respuesta2.forEach(element=>{
                 histDeAlquiler+=`
                    <div class="col-lg-12 mb-5">
                        <h5 class="card-title">Detalle</h5>
                        <p>Cliente: pepito</p>
                        <p class="card-text">${element.detalle}</p>
                    </div>
                `; 
            });
            document.getElementById('historialBody').innerHTML=histDeAlquiler;
        }
    });
}

//guarda cambios en ver mas info del alquiler
function guardarCambios(objAlquilar) {
    let tipoABM = "alquiler";
    let fechaInicio = document.getElementById("inicio").value;
    let fechaFin = document.getElementById("fin").value;
    let observacion = document.getElementById("observaciones").value;
    let id_alquiler=objAlquilar.id;
    
    data = {"tipoABM": tipoABM,"id":id_alquiler, "fechaInicio": fechaInicio, "fechaFin": fechaFin, "observacion": observacion};
    $.ajax({
        type:"POST",
        url:"adminGestion_editar.php",
        data: data,
        success: function(res){
            mostrarTabla(tipoABM);
        }
    })

}