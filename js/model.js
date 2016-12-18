function Model() {
    this.taskList = [];
    this.getAll();
}

Model.prototype = new EventEmitter();

/**
 * Put the datas in local storage, then push them in getters and setters
 */
Model.prototype.getAll = function () {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function (task) {
        this.taskList.push(new TaskModel(task));
    }, this);
};

Model.prototype.addTask = function (task) {
    task.setTaskId(this.taskList.length);
    this.taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    this.emit('LIST');
};