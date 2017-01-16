class Model extends EventEmitter{
    constructor(){
        super();
        this.taskList = []; //all tasks
        this.task = {}; //one task select
        this.getAllTasks();
    }
    /**
     * Put the datas in local storage, then push them in getters and setters
     */
    getAllTasks(){
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.map((task) => {
            this.taskList.push(new TaskModel(task));
        });
    }
    /**
     * add a task in the local storage
     * @param task
     */
    addTask(datas){
        let task = new TaskModel(datas);
        task.taskId = this.taskList.length;
        task.taskStatus = 0;
        this.taskList.push(task);
        this.updateJson();
        this.emit('LIST');
    }
    changeStatusTask(taskId){
        for(let task of this.taskList){
            if(task.taskId == taskId){
                this.task = task;
            }
        }
        if(this.task.taskStatus == 0){
            this.task.taskStatus = 1;
        } else if(this.task.taskStatus == 1){
            this.task.taskStatus = 0;
        }
        for(let task of this.taskList){
            if(task.taskId == this.task.taskId){
                task.taskStatus = this.task.taskStatus;
            }
        }
        this.updateJson();
        this.emit('LIST');
    }
    removeTask(taskId){
        for(let task of this.taskList){
            if(task.taskId == taskId){
                this.taskList.splice(this.taskList.indexOf(task), 1);
            }
        }
        this.updateJson();
        this.emit('LIST');
    }
    updateJson(){
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
    }
}