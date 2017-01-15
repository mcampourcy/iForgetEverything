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
        tasks.map((task) => {
            this.taskList.push(new TaskModel(task));
        });
    }
    /**
     * add a task in the local storage
     * @param task
     */
    addTask(datas){
        var task = new TaskModel(datas);
        task.taskId = (this.taskList.length);
        task.taskStatus = 0;
        this.taskList.push(task);
        this.updateJson();
        this.emit('LIST');
    }
    changeStatusTask(taskId){
        this.task = new TaskModel(this.taskList[taskId]);
        if(this.task.taskStatus == 0){
            this.task.taskStatus = 1;
        } else if(this.task.taskStatus == 1){
            this.task.taskStatus = 0;
        }
        this.taskList.forEach(function (task) {
            if(task.taskId == this.task.taskId){
                task.taskStatus = this.task.taskStatus;
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