class AddView extends EventEmitter{
    constructor(model){
        super();
        this.model = model;
        this.init();
        this.bindListeners();
    }
    init(){
        this.btnAdd = document.getElementById('addTodo');
        this.modal = document.getElementById('addModal');
        this.close = document.getElementsByClassName('close')[0];
        this.addForm = document.getElementById('addForm');
        this.input = document.getElementById('taskName');
    }
    bindListeners(){
        this.btnAdd.addEventListener('click', function () {
            this.display();
        }.bind(this));

        this.addForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var task = {};
            task['taskName'] = this.input.value;
            this.emit('ADD', task);
            this.modal.style.display = "none";
        }.bind(this));
    }
    display(){
        this.modal.style.display = "block";
        this.input.value = '';
        this.close.onclick = function() {
            this.modal.style.display = "none";
        }.bind(this);
        window.onclick = function(event) {
            if (event.target == this.modal) {
                this.modal.style.display = "none";
            }
        }.bind(this);
    }
}