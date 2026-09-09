class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
   
  }


      // =====================================
    // AGREGAR TAREA
    // =====================================
  addTask(name,description,dueDate,status){
      this.currentId++;

      this.tasks.push({
          id:this.currentId,
          name:name,
          description:description,
          dueDate:dueDate,
          status:status,
      });
      
        this.save();
        this.render();
    console.log(taskManager.tasks);

  } 
  

      // =====================================
    // ELIMINAR TAREA
    // =====================================


  deleteTask(taskId){
    const newTasks=[];
    for(let task of this.tasks){
      if(task.id !==taskId){
        newTasks.push(task);
      }
    }
    this.tasks=newTasks;
  }

  // =====================================
    // GUARDAR
    // =====================================
     save() {

        const tasksJson = JSON.stringify(this.tasks);

    localStorage.setItem(
        "tasks",
        tasksJson
    );

    const currentId = String(this.currentId);

    localStorage.setItem(
        "currentId",
        currentId
    );
    }


 // =====================================
    // CARGAR
    // =====================================

    load() {

        const tasksGuardadas =
            localStorage.getItem("tasks");

        const idGuardado =
            localStorage.getItem("currentId");


        if (tasksGuardadas) {

            this.tasks = JSON.parse(tasksGuardadas);
        }


        if (idGuardado) {

            this.currentId = Number(idGuardado);
        }


    
    }


      // =====================================
    // CREAR HTML DE UNA TAREA
    // =====================================

    createTaskHtml(task) {

        return `
            <div
                class="card mb-3 tarea-card"
                data-task-id="${task.id}"
            >

                <div class="card-body">

                    <h5 class="card-title">
                        ${task.name}
                    </h5>

                    <p class="card-text">
                        ${task.description}
                    </p>

                    <p>
                        <strong>Fecha:</strong>
                        ${task.dueDate}
                    </p>

                    <p>
                        <strong>Estado:</strong>

                        <span class="badge bg-warning text-dark estado-tarea">
                            ${task.status}
                        </span>
                    </p>


                   <button 
    class="done-button btn btn-success btn-sm"
>
    Mark As Done
</button>


                    <button
                        class="btn btn-warning btn-sm"
                    >
                        Editar
                    </button>


                    <button
                        class="delete-button btn btn-danger btn-sm"
                    >
                        Eliminar
                    </button>

                </div>

            </div>
        `;
    }

     // =====================================
    // RENDERIZAR
    // =====================================

    render() {

        const listaTareas =
            document.getElementById("listaTareas");

        if (!listaTareas) {
            return;
        }


        listaTareas.innerHTML = "";


        for (let task of this.tasks) {

            listaTareas.innerHTML +=
                this.createTaskHtml(task);
        }
    }


    getTaskById(taskId) {

    let foundTask;

    for (let task of this.tasks) {

        if (task.id === taskId) {
            foundTask = task;
        }
    }

    return foundTask;
}
}

  



