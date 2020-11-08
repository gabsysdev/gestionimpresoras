cargarCategoria=[];
cargarProveedor=[];
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
        Libres <span class="badge badge-success">0</span>
        Alquilados <span class="badge" style="background-color: rgb(238, 255, 6);">0</span>
        Prox. a devolver <span class="badge" style="background-color: rgb(255, 168, 6);">0</span>
        Sin devolver <span class="badge badge-danger">0</span>
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
                                '${element.id_proveedor}')"
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
                        <button class="btn btn-secondary" data-toggle="modal" data-target="#modalModificar" onclick="onclick_btnEditar('Categoria','${element.id}','${element.nombre}','','','','')">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </button>
                    </td>
                    <td><button type="button" onclick="onclick_btnEliminar('categoria','${element.id}')" class="btn btn-danger" data-toggle="modal" data-target="#modalEliminar">Eliminar</button></td>
                </tr>
                `;
            });
            }
            else if(tipoDeConsulta=='alquiler'){
                respuesta2.forEach(element => {
                llenarTabla+=`
                <tr>
                    <td>${element.nombre}</td>
                    <td>${element.serial}</td>
                    <td>${element.fec_alquilado}</td>
                    <td>${element.fec_devolucion}</td>
                    <td>${element.estado}</td>
                    <td><button class="btn btn-secondary" >+</button></td>
                </tr>
                `;
                });
            }else if(tipoDeConsulta=='abmProveedores'){
                respuesta2.forEach(element => {
                llenarTabla+=`
                <tr>
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

function misDatosVisible(){
    document.getElementById('tituloMisDatos').innerHTML="Mis datos";
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