const formulario = document.getElementById("formTarea");

const taskManager = new TaskManager();


// =====================================
// FORMULARIO
// =====================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const formularioValido = validarFormulario();

    if (formularioValido) {

        const name = document
            .getElementById("nombreTarea")
            .value
            .trim();

        const description = document
            .getElementById("descripcionTarea")
            .value
            .trim();

        const dueDate = document
            .getElementById("fechaTarea")
            .value;

        const status = document
            .getElementById("estadoFecha")
            .value;


        taskManager.addTask(
            name,
            description,
            dueDate,
            status
        );


        console.log(taskManager.tasks);


        formulario.reset();
    }
});


// =====================================
// MOSTRAR MENSAJE
// =====================================

function mostrarMensaje(mensaje, tipo) {

    const contenedor =
        document.getElementById("mensaje");


    contenedor.innerHTML = `
        <div 
            class="alert alert-${tipo} alert-dismissible fade show" 
            role="alert"
        >

            ${mensaje}

            <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="alert"
                aria-label="Close"
            >
            </button>

        </div>
    `;
}


// =====================================
// VALIDAR FORMULARIO
// =====================================

function validarFormulario() {

    const nombre =
        document
            .getElementById("nombreTarea")
            .value
            .trim();


    const descripcion =
        document
            .getElementById("descripcionTarea")
            .value
            .trim();


    const fecha =
        document.getElementById("fechaTarea").value;


    const estado =
        document.getElementById("estadoFecha").value;


    // -------------------------------------
    // NOMBRE
    // -------------------------------------

    if (nombre === "") {

        mostrarMensaje(
            "El nombre de la tarea es obligatorio.",
            "danger"
        );

        return false;
    }


    // -------------------------------------
    // DESCRIPCIÓN
    // -------------------------------------

    if (descripcion === "") {

        mostrarMensaje(
            "La descripción es obligatoria.",
            "danger"
        );

        return false;
    }


    // -------------------------------------
    // FECHA
    // -------------------------------------

    if (fecha === "") {

        mostrarMensaje(
            "Debe seleccionar una fecha.",
            "danger"
        );

        return false;
    }


    // -------------------------------------
    // ESTADO
    // -------------------------------------

    if (estado === "") {

        mostrarMensaje(
            "Debe seleccionar un estado.",
            "danger"
        );

        return false;
    }


    mostrarMensaje(
        "Tarea registrada correctamente.",
        "success"
    );


    return true;
}


// =====================================
// EVENTOS DE LA LISTA DE TAREAS
// =====================================

const listaTareas =
    document.getElementById("listaTareas");


listaTareas.addEventListener("click", function (event) {


    // =====================================
    // ELIMINAR TAREA
    // =====================================

    if (
        event.target.classList.contains("delete-button")
    ) {

        const parentTask =
            event.target.closest(".tarea-card");


        const taskId =
            Number(parentTask.dataset.taskId);


        taskManager.deleteTask(taskId);


        taskManager.save();


        taskManager.render();


        return;
    }

    // =====================================
    // MARCAR TAREA COMO HECHA
    // =====================================

    if (
        event.target.classList.contains("done-button")
    ) {

        const parentTask =
            event.target.closest(".tarea-card");


        const taskId =
            Number(parentTask.dataset.taskId);


        const task =
            taskManager.getTaskById(taskId);


        task.status = "DONE";


        taskManager.save();


        taskManager.render();
    }
  

});