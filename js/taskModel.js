/**
 * @param datas
 * @constructor
 */
var TaskModel = function (datas) {
    if(datas){
        this.taskId = datas.taskId;
        this.taskName = datas.taskName;
        this.taskStatus = datas.taskStatus;
    }
};

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