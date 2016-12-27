function Model() {
    this.taskList = []; //all tasks
    this.task = {}; //one task select
    this.getAllTasks();
}

Model.prototype = new EventEmitter();

/**
 * Put the datas in local storage, then push them in getters and setters
 */
Model.prototype.getAllTasks = function () {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function (task) {
        this.taskList.push(new TaskModel(task));
    }, this);
};

/**
 * add a task in the local storage
 * @param task
 */
Model.prototype.addTask = function (datas) {
    var task = new TaskModel(datas);
    task.setTaskId(this.taskList.length);
    task.setTaskStatus(0);
    this.taskList.push(task);
    this.updateJson();
    this.emit('LIST');
};

Model.prototype.changeStatusTask = function (taskId) {
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
};

Model.prototype.removeTask = function (taskId) {
    this.taskList.forEach(function (task) {
        if(task.taskId == taskId){
            this.taskList.splice(this.taskList.indexOf(task), 1);
        }
    }.bind(this));
    this.updateJson();
    this.emit('LIST');
};

Model.prototype.updateJson = function () {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
};