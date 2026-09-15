
📋 Administrador de Tareas

📖 Descripción

Aplicación web desarrollada como parte del Proyecto Individual de Generation para gestionar tareas de forma sencilla y organizada.

El proyecto comenzó con una interfaz estática en HTML, CSS y Bootstrap y posteriormente incorporó JavaScript para gestionar las tareas dinámicamente.

🎯 Objetivo

Desarrollar una aplicación que permita:

Crear tareas.

Visualizar tareas.

Marcar tareas como completadas.

Eliminar tareas.

Guardar información en el navegador.

Aplicar buenas prácticas de JavaScript y organización del proyecto.

🛠️ Tecnologías

HTML5

CSS3

Bootstrap 5

JavaScript

LocalStorage

Git / GitHub

📂 Estructura

GNProyecto_Individual/
│
├── assets/
│   └── img/
├── css/
│   └── styles.css
├── js/
│   ├── index.js
│   └── taskManager.js
├── index.html
└── README.md

🚀 Desarrollo

🟢 Sprint 1 - Interfaz

Se desarrolló la estructura visual de la aplicación:

Barra de navegación.

Formulario de tareas.

Campos de nombre, descripción, fecha y estado.

Tarjetas de tareas.

Diseño responsive con Bootstrap.

🟡 Sprint 2 - JavaScript y gestión de tareas

Se incorporó JavaScript para gestionar las tareas mediante la clase TaskManager.

Tarea 4 - TaskManager

Se creó la clase TaskManager con el array tasks para almacenar las tareas y se implementó el cambio visual de estado.

Tarea 5 - Agregar tareas

Se implementó addTask() para crear tareas como objetos con:

{
    id,
    name,
    description,
    dueDate,
    status
}

Las tarjetas ahora se generan dinámicamente mediante:

createTaskHtml()

render()

Tarea 6 - Eliminar tareas

Se implementó:

deleteTask(taskId)

El botón eliminar identifica cada tarea mediante data-task-id.

El flujo es:

Eliminar → deleteTask() → save() → render()

💾 LocalStorage

Se implementaron:

save()
load()

para guardar y recuperar las tareas utilizando localStorage.

✅ Validación

Se agregaron validaciones al formulario para evitar registrar tareas con información incompleta.

🧪 Pruebas

Crear tareas.

Mostrar tareas dinámicamente.

Validar formulario.

Marcar tareas como completadas.

Eliminar tareas.

Guardar y recuperar tareas con localStorage.

Diseño responsive.

🔮 Próximas funcionalidades

Editar tareas.

Buscar y filtrar tareas.

Persistir el cambio de estado.

Sistema de usuarios y autenticación.

API REST.

Backend con Java y Spring Boot.

PostgreSQL.

Docker.

🔗 Recursos

**Enlace al tablero:**

👉 https://trello.com/invite/b/6a6ba63d04de471e6edc3522/ATTId85357b2819d251bb842b2f6a8e31d4aA70F83A7/gnproyectoindividual

---

## 🔗 Recursos del proyecto

- 🎨 **Diseño en Figma:** [GN Proyecto Individual](https://www.figma.com/design/1P9DkxSDv3NDvIDWLOsFwi/GNproyecto_Individual)
- 📋 **Gestión del proyecto:** [Trello](https://trello.com/invite/b/6a6ba63d04de471e6edc3522/ATTId85357b2819d251bb842b2f6a8e31d4aA70F83A7/gnproyectoindividual)
- 💻 **Repositorio:** [GitHub](https://github.com/carc0813/GNProyecto_Individual.git)
- 🌐 **Demo:** [GitHub Pages](https://carc0813.github.io/GNProyecto_Individual/)
⚙️ Backend: GNBackend_ProyectoIndividual — GitHub


📚 Aprendizajes

Durante el proyecto se fortalecieron conocimientos en HTML, CSS, Bootstrap, JavaScript, DOM, eventos, arrays, objetos, clases, LocalStorage, JSON, Git y GitHub.

👨‍💻 Autor

César Restrepo

Proyecto desarrollado como parte del proceso de formación en desarrollo Full Stack.

📌 Estado

🚧 Proyecto en desarrollo