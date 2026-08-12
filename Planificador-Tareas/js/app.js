const formulario = document.getElementById("formTarea");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    validarFormulario();

});


function mostrarMensaje(mensaje, tipo) {

    const contenedor = document.getElementById("mensaje");

    contenedor.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">

            ${mensaje}

            <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="alert"
                aria-label="Close">
            </button>

        </div>
    `;
}


function validarFormulario() {

    const nombre = document
        .getElementById("nombreTarea")
        .value
        .trim();

    const descripcion = document
        .getElementById("descripcionTarea")
        .value
        .trim();

    const fecha = document
        .getElementById("fechaTarea")
        .value;

    const estado = document
        .getElementById("estadoFecha")
        .value;


    // Validar nombre
    if (nombre === "") {

        mostrarMensaje(
            "El nombre de la tarea es obligatorio.",
            "danger"
        );

        return false;
    }


    // Validar descripción
    if (descripcion === "") {

        mostrarMensaje(
            "La descripción es obligatoria.",
            "danger"
        );

        return false;
    }


    // Validar fecha
    if (fecha === "") {

        mostrarMensaje(
            "Debe seleccionar una fecha.",
            "danger"
        );

        return false;
    }


    // Validar estado
    if (estado === "") {

        mostrarMensaje(
            "Debe seleccionar un estado.",
            "danger"
        );

        return false;
    }


    // Si todo está correcto
    mostrarMensaje(
        "Tarea registrada correctamente.",
        "success"
    );

    return true;
}