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
        // console.log(this.model.taskList);
        this.model.taskList.forEach(function (task) {
            //create elements
            var p = document.createElement('p');
            var text = document.createTextNode(task.getTaskName());
            var trashIcon = document.createElement('div');
            trashIcon.className = 'fa fa-times';
            trashIcon.dataset.idTask = task.getTaskId();
            var checkIcon = document.createElement('div');
            if(task.getTaskStatus() == 1){
                checkIcon.className = 'fa fa-check-square-o';
            } else {
                checkIcon.className = 'fa fa-square-o';
            }
            checkIcon.dataset.idTask = task.getTaskId();

            //set structure
            this.taskList.appendChild(p);
            p.appendChild(trashIcon);
            p.appendChild(checkIcon);
            p.appendChild(text);

            checkIcon.addEventListener('click', function (e) {
                e.preventDefault();
                this.emit('STATUS', e.currentTarget.dataset.idTask);
            }.bind(this));

            trashIcon.addEventListener('click', function (e) {
                e.preventDefault();
                var msg = confirm('Do you really want to delete this todo ?');
                if(msg) this.emit('REMOVE', e.currentTarget.dataset.idTask);
            }.bind(this));

        }.bind(this));
    }
};