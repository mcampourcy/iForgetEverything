class Controller{
    constructor(model, listView, addView){
        this.model = model;
        this.listView = listView;
        this.addView = addView;
        this.listen();
    }
    listen(){
        this.listView.on('LIST', this.getAllTasks.bind(this));
        this.addView.on('ADD', this.addTask.bind(this));
        this.listView.on('STATUS', this.changeStatusTask.bind(this));
        this.listView.on('REMOVE', this.removeTask.bind(this));
    }
    getAllTasks(){
        this.model.getAllTasks();
    }
    addTask(datas){
        this.model.addTask(datas);
    }
    changeStatusTask(taskId){
        this.model.changeStatusTask(taskId);
    }
    removeTask(taskId){
        this.model.removeTask(taskId);
    }
}
