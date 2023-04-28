var formularioVisible = false;
var sesionIniciada = false;

function iniciarSesion(){
    if(!sesionIniciada)
    {
        if(!formularioVisible)
        {
            document.querySelector(".container-formulario").style.display = "table";
            formularioVisible = true;
        }
        else
        {
            document.querySelector(".container-formulario").style.display = "none";
            formularioVisible = false;
        }
    }
    else
    {
        document.querySelector(".login-button").innerHTML = "LOG IN";
        sesionIniciada = false;
        cambiarModoEdicion();
    }
}

function validarInformacion(){
    if(!sesionIniciada)
    {
        let usuario = document.querySelector("#usuario").value;
        let contraseña = document.querySelector("#contraseña").value;
        if(usuario=="mvalentinuz" && contraseña=="portfolio")
        {
            alert("Sesión iniciada con éxito.");
            document.querySelector(".container-formulario").style.display = "none";
            formularioVisible = false;
            document.querySelector(".login-button").innerHTML = "LOG OUT";
            document.querySelector("#usuario").value = "";
            document.querySelector("#contraseña").value = "";
            sesionIniciada = true;
            cambiarModoEdicion();
        }
        else
        {
            alert("Los datos ingresados no son correctos.");
            document.querySelector("#usuario").value = "";
            document.querySelector("#contraseña").value = "";
        }
    }
}

function cambiarModoEdicion(){
    if(sesionIniciada)
    {
        let botones = document.getElementsByClassName("botonBorrar");
        for (boton of botones)
        {
            boton.style.display = "inline";
        };
        botones = document.getElementsByClassName("botonAgregar");
        for (boton of botones)
        {
            boton.style.display = "inline";
        };
        botones = document.getElementsByClassName("botonEditar");
        for (boton of botones)
        {
            boton.style.display = "inline";
        };
        botones = document.getElementsByName("divAgregar");
        for (boton of botones)
        {
            boton.style.display = "flex";
        };
    }
    else
    {
        let botones = document.getElementsByClassName("botonBorrar");
        for (boton of botones)
        {
            boton.style.display = "none";
        };
        botones = document.getElementsByClassName("botonAgregar");
        for (boton of botones)
        {
            boton.style.display = "none";
        };
        botones = document.getElementsByClassName("botonEditar");
        for (boton of botones)
        {
            boton.style.display = "none";
        };
        botones = document.getElementsByName("divAgregar");
        for (boton of botones)
        {
            boton.style.display = "none";
        };
    }
}

function habilitarEdicionDeParrafo(){
    let parrafoInfo = document.getElementsByName("informacion")[0];
    let botonEditar = document.getElementsByClassName("botonEditar")[0];
    let nodoPadre = parrafoInfo.parentNode;
    nodoPadre.removeChild(parrafoInfo);
    nodoPadre.removeChild(botonEditar);
    nodoPadre.innerHTML += '<div id="entradaDeParrafo"><input type="text" id="info" style="width: 100%;"></div>';
    nodoPadre.innerHTML += '<button class="botonEditar" onclick="guardarInformacion()">Guardar</button>';
    cambiarModoEdicion();

}

function habilitarIngresoDeNuevaInstitucion(botonActivado){
    let nodoPadre = botonActivado.parentNode;
    nodoPadre.removeChild(botonActivado);
    nodoPadre.innerHTML += '<div class="row" name="divIngreso" style="border-bottom: none;"><div class="col-2"><input type="text" id="srcLogo" placeholder="Dirección de Logo"></div><div class="col-8"><input type="text" id="titulo" placeholder="Título" style="width: 100%;"><input type="date" id="fechaInicio"> - <input type="date" id="fechaFin"><input type="text" id="descripcion" placeholder="Descripción" style="width: 100%;"></div></div>';
    nodoPadre.innerHTML += '<button class="botonEditar" onclick="agregarInstitucion(this)" style="width:100%;display:inline;">Guardar</button>';
    cambiarModoEdicion();

}

function habilitarIngresoDeNuevaSkill(botonActivado){
    let nodoPadre = botonActivado.parentNode;
    nodoPadre.removeChild(botonActivado);
    nodoPadre.innerHTML += '<div class="row" name="divIngreso"><div class="col-3"><input type="text" id="nombreSkill" placeholder="Nombre de la habilidad" style="width: 100%;"></div><div class="col-9"><input type="number" id="porcentaje">%</div></div>';
    nodoPadre.innerHTML += '<button class="botonEditar" onclick="agregarSkill(this)" style="width:100%;display:inline;">Guardar</button>';
    cambiarModoEdicion();
}

function habilitarIngresoDeNuevoProyecto(botonActivado){
    let nodoPadre = botonActivado.parentNode;
    nodoPadre.removeChild(botonActivado);

    nodoPadre.innerHTML += '<div class="row" name="divIngreso"><div class="col-3"><input type="text" id="nombreProyecto" placeholder="Nombre del proyecto" style="width: 100%;"></div><div class="col-9"><input type="text" id="descripcion" placeholder="Descripción" style="width: 100%;"><input type="text" id="link" placeholder="Link a visualización" style="width: 100%;"></div></div>';
    nodoPadre.innerHTML += '<button class="botonEditar" onclick="agregarProyecto(this)" style="width:100%; display:inline;">Guardar</button>';
}

function guardarInformacion(){
    let entrada = document.getElementById("info");
    let nuevaInfo = entrada.value;
    let divInfo = entrada.parentNode.parentNode;

    divInfo.removeChild(entrada.parentNode);
    divInfo.removeChild(document.querySelector(".botonEditar"));
    divInfo.innerHTML += '<p name="informacion">'+nuevaInfo+'</p>';
    divInfo.innerHTML += '<button class="botonEditar" onclick="habilitarEdicionDeParrafo()">Editar</button>';
    cambiarModoEdicion();
}

function borrar(botonActivado){
    botonActivado.parentNode.parentNode.parentNode.removeChild(botonActivado.parentNode.parentNode);
}

function agregarInstitucion(botonActivado){
    let srcLogo = document.getElementById("srcLogo").value;
    let titulo = document.getElementById("titulo").value;
    let fechaInicio = new Date(document.getElementById("fechaInicio").value);
    let diaInicio = fechaInicio.getDate();
    let mesInicio = fechaInicio.getMonth() + 1;
    let anioInicio = fechaInicio.getFullYear();
    let fechaFin = new Date(document.getElementById("fechaFin").value);
    let diaFin = fechaFin.getDate();
    let mesFin = fechaFin.getMonth() + 1;
    let anioFin = fechaFin.getFullYear();
    let descripcion = document.getElementById("descripcion").value;
    let nodoPadre = botonActivado.parentNode;

    nodoPadre.removeChild(botonActivado);
    nodoPadre.removeChild(document.getElementsByName("divIngreso")[0]);
    nodoPadre.innerHTML += '<div class="row" data-aos="fade-right"><div class="col-2"><img class="logos-instituciones" src="'+srcLogo+'" width="80%" alt="Logo"></div><div class="col-8"><h4><strong>'+titulo+'</strong></h4><h5>'+diaInicio+'/'+mesInicio+'/'+anioInicio+' - '+diaFin+'/'+mesFin+'/'+anioFin+'</h5><p>'+descripcion+'</p><button class="botonBorrar" onclick="borrar(this)">Borrar</button></div></div>';
    nodoPadre.innerHTML += '<div class="row" name="divAgregar" onclick="habilitarIngresoDeNuevaInstitucion(this)" style="display:none; border-bottom: 0;"><button class="botonAgregar">+</button></div>';
    cambiarModoEdicion();
}

function agregarSkill(botonActivado){
    let nombre = document.getElementById("nombreSkill").value;
    let porcentaje = document.getElementById("porcentaje").value;
    let nodoPadre = botonActivado.parentNode;

    nodoPadre.removeChild(botonActivado);
    nodoPadre.removeChild(document.getElementsByName("divIngreso")[0]);
    nodoPadre.innerHTML += '<div class="row" data-aos="fade-right"><div class="col-3"><h3>'+nombre+'</h3><button class="botonBorrar" style="position:relative;" onclick="borrar(this)"> Borrar </button></div><div class="col-9"><div class="progress"><div class="progress-bar w-'+porcentaje+'" role="progressbar" aria-valuenow="'+porcentaje+'" aria-valuemin="0" aria-valuemax="100"></div></div></div></div>';
    nodoPadre.innerHTML += '<div class="row" name="divAgregar" style="display: none; border-bottom: 0;"><button class="botonAgregar" onclick="habilitarIngresoDeNuevaSkill(this)">+</button></div>'
    cambiarModoEdicion();
}

function agregarProyecto(botonActivado){
    let nombre = document.getElementById("nombreProyecto").value;
    let descripcion = document.getElementById("descripcion").value;
    let link = document.getElementById("link").value;
    let nodoPadre = botonActivado.parentNode;

    nodoPadre.removeChild(botonActivado);
    nodoPadre.removeChild(document.getElementsByName("divIngreso")[0]);
    nodoPadre.innerHTML += '<div class="row" data-aos="fade-right" data-aos-anchor-placement="center-bottom"><div class="col-3"><h3>'+nombre+'</h3></div><div class="col-9"><h5>'+descripcion+'</h5><a href="'+link+'">Ver</a><br><button class="botonBorrar" onclick="borrar(this)"> Borrar </button></div></div>';
    nodoPadre.innerHTML += '<div class="row" name="divAgregar" style="display: none; border-bottom: 0;"><button class="botonAgregar" onclick="habilitarIngresoDeNuevoProyecto(this)">+</button></div>'
    cambiarModoEdicion();
}