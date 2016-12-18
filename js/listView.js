function ListView(model){
    this.model = model;
    this.init();
    this.listen();
    this.display();
}

ListView.prototype = new EventEmitter();

ListView.prototype.init = function () {
    this.taskList = document.getElementById('taskList');
};

ListView.prototype.listen = function () {
    this.model.on('LIST', this.display.bind(this));
};

ListView.prototype.display = function () {
    if(this.model.taskList === 0){
        this.taskList.innerHTML = '';
    } else {
        this.taskList.innerHTML = '';
        this.model.taskList.forEach(function (task) {
            var p = document.createElement('p');
            p.innerHTML = task.getTaskName();
            this.taskList.appendChild(p);
        }.bind(this));
    }
};