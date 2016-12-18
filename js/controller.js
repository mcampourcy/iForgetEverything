/**
 * @param model
 * @param addView
 * @constructor
 */
function Controller(model, listView, addView) {
    this.model = model;
    this.addView = addView;
    this.listen();
}

Controller.prototype.listen = function () {
    this.addView.on('ADD', this.addTask.bind(this));
};

Controller.prototype.addTask = function (datas) {
    var task = new TaskModel(datas);
    this.model.addTask(task);
};