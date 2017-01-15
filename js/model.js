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
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function (task) {
            this.taskList.push(new TaskModel(task));
        }, this);
    }
    /**
     * add a task in the local storage
     * @param task
     */
    addTask(datas){
        var task = new TaskModel(datas);
        task.setTaskId(this.taskList.length);
        task.setTaskStatus(0);
        this.taskList.push(task);
        this.updateJson();
        this.emit('LIST');
    }
    changeStatusTask(taskId){
        this.task = new TaskModel(this.taskList[taskId]);
        if(this.task.getTaskStatus() == 0){
            this.task.setTaskStatus(1);
        } else if(this.task.getTaskStatus() == 1){
            this.task.setTaskStatus(0);
        }
        this.taskList.forEach(function (task) {
            if(task.taskId == this.task.getTaskId()){
                task.taskStatus = this.task.getTaskStatus();
            }
        }.bind(this));
        this.updateJson();
        this.emit('LIST');
    }
    removeTask(taskId){
        this.taskList.forEach(function (task) {
            if(task.taskId == taskId){
                this.taskList.splice(this.taskList.indexOf(task), 1);
            }
        }.bind(this));
        this.updateJson();
        this.emit('LIST');
    }
    updateJson(){
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
    }
}