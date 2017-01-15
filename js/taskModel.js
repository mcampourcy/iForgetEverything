class TaskModel{
    constructor(datas){
        this.taskId = 0;
        this.taskName = '';
        this.taskStatus = 0;
        if(datas.taskId) this.setTaskId(datas.taskId);
        if(datas.taskName) this.setTaskName(datas.taskName);
        if(datas.taskStatus) this.setTaskStatus(datas.taskStatus);
    }
}

// Getters and setters
TaskModel.prototype.getTaskId = function () {
    return this.taskId;
};

TaskModel.prototype.setTaskId = function (taskId) {
    this.taskId = taskId;
};

TaskModel.prototype.getTaskName = function () {
    return this.taskName;
};

TaskModel.prototype.setTaskName = function (taskName) {
    this.taskName = taskName;
};

TaskModel.prototype.getTaskStatus = function () {
    return this.taskStatus;
};

TaskModel.prototype.setTaskStatus = function (taskStatus) {
    this.taskStatus = taskStatus;
};