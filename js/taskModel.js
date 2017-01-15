class TaskModel{
    constructor(datas){
        this._taskId = datas.taskId;
        this._taskName = datas.taskName;
        this._taskStatus = datas.taskStatus;
    }
    get taskId(){
        return this._taskId;
    }
    set taskId(taskId){
        this._taskId = taskId;
    }
    get taskName(){
        return this._taskName;
    }
    set taskName(taskName){
        this._taskName = taskName;
    }
    get taskStatus(){
        return this._taskStatus;
    }
    set taskStatus(taskStatus){
        this._taskStatus = taskStatus;
    }
}