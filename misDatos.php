<h3 class="text-center mt-4" id="tituloMisDatos"></h3>

<div class="container-fluid border border-white bg-light rounded">
    <div class="row m-3">
        <div class="col-4">
            <img src="" alt="">
        </div>
        <div class="col-8">
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Nombre de la empresa</span>
                </div>
                <input id="nombreEmpresa" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Direccion</span>
                </div>
                <input id="direccion"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Cuit</span>
                </div>
                <input id="cuit"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Rubro</span>
                </div> 
                <input id="rubro"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="custom-file mb-3">
                <input id="logo"  type="file" class="custom-file-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                <label class="custom-file-label" for="validatedCustomFile">Logo de la empresa</label>
            </div>
            <button class="btn btn-primary" onclick="editarCambios('misdatos')">Guardar cambios</button>
        </div>
    </div>
</div>
