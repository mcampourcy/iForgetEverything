class ListView extends EventEmitter{
    constructor(model){
        super();
        this.model = model;
        this.init();
        this.listen();
        this.display();
    }
    init(){
        this.taskList = document.getElementById('taskList');
    }
    listen(){
        this.model.on('LIST', this.display.bind(this));
    }
    display(){
        if(this.model.taskList === 0){
            this.taskList.innerHTML = '';
        } else {
            this.taskList.innerHTML = '';
            this.model.taskList.forEach(function (task) {
                //create elements
                let p = document.createElement('p');
                // console.log(task);
                let text = document.createTextNode(task.taskName);
                let trashIcon = document.createElement('div');
                trashIcon.className = 'fa fa-times';
                trashIcon.dataset.idTask = task.taskId;
                let checkIcon = document.createElement('div');
                if (task.taskStatus == 1) {
                    checkIcon.className = 'fa fa-check-square-o';
                } else {
                    checkIcon.className = 'fa fa-square-o';
                }
                checkIcon.dataset.idTask = task.taskId;

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
                    let msg = confirm('Do you really want to delete this todo ?');
                    if (msg) this.emit('REMOVE', e.currentTarget.dataset.idTask);
                }.bind(this));

            }.bind(this));
        }
    }
}
