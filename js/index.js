const formulario = document.getElementById("formTarea");

const taskManager = new TaskManager();

// taskManager.addTask(
//   "Estudiar JavaScript",
//   "Practicar clases y objetos",
//   "2026-08-28",
//   "PORHACER",
// );

// console.log(taskManager.tasks);

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
  const nombre = document.getElementById("nombreTarea").value.trim();

  const descripcion = document.getElementById("descripcionTarea").value.trim();

  const fecha = document.getElementById("fechaTarea").value;

  const estado = document.getElementById("estadoFecha").value;

  // Validar nombre

  if (nombre === "") {
    mostrarMensaje("El nombre de la tarea es obligatorio.", "danger");

    return false;
  }

  // Validar descripción

  if (descripcion === "") {
    mostrarMensaje("La descripción es obligatoria.", "danger");

    return false;
  }

  // Validar fecha

  if (fecha === "") {
    mostrarMensaje("Debe seleccionar una fecha.", "danger");

    return false;
  }

  // Validar estado

  if (estado === "") {
    mostrarMensaje("Debe seleccionar un estado.", "danger");

    return false;
  }

  // Si todo está correcto

  mostrarMensaje("Tarea registrada correctamente.", "success");

  return true;
}

// =====================================
// CAMBIAR ESTADO DE LAS TAREAS
// =====================================

const botonesCompletar = document.querySelectorAll(".btn-completar");

botonesCompletar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const tarjeta = boton.closest(".tarea-card");

    const estado = tarjeta.querySelector(".estado-tarea");

    if (estado.textContent.trim() === "Porhacer") {
      // Cambiar estado

      estado.textContent = "Completada";

      // Cambiar color del estado

      estado.classList.remove("bg-warning", "text-dark");

      estado.classList.add("bg-success");

      // Cambiar borde de la tarjeta

      tarjeta.classList.add("border-success");

      // Cambiar texto del botón

      boton.textContent = "Marcar porhacer";

      // Cambiar color del botón

      boton.classList.remove("btn-success");

      boton.classList.add("btn-secondary");
    } else {
      // Cambiar estado

      estado.textContent = "porhacer";

      // Cambiar color del estado

      estado.classList.remove("bg-success");

      estado.classList.add("bg-warning", "text-dark");

      // Quitar borde de la tarjeta

      tarjeta.classList.remove("border-success");

      // Cambiar texto del botón

      boton.textContent = "Completar";

      // Cambiar color del botón

      boton.classList.remove("btn-secondary");

      boton.classList.add("btn-success");
    }
  });
});
