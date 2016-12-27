/**
 * @param model
 * @param addView
 * @constructor
 */
function Controller(model, listView, addView) {
    this.model = model;
    this.listView = listView;
    this.addView = addView;
    this.listen();
}

Controller.prototype.listen = function () {
    this.listView.on('LIST', this.getAllTasks.bind(this));
    this.addView.on('ADD', this.addTask.bind(this));
    this.listView.on('STATUS', this.changeStatusTask.bind(this));
    this.listView.on('REMOVE', this.removeTask.bind(this));
};

Controller.prototype.getAllTasks = function () {
    this.model.getAllTasks();
};

Controller.prototype.addTask = function (datas) {
    this.model.addTask(datas);
};

Controller.prototype.changeStatusTask = function (taskId) {
    this.model.changeStatusTask(taskId);
};

Controller.prototype.removeTask = function (taskId) {
    this.model.removeTask(taskId);
};