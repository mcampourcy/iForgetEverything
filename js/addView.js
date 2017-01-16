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
        this.btnAdd.addEventListener('click', () => {
            this.display();
        });

        this.addForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let task = {};
            task['taskName'] = this.input.value;
            this.emit('ADD', task);
            this.modal.style.display = "none";
        });
    }
    display(){
        this.modal.style.display = "block";
        this.input.value = '';
        this.close.addEventListener('click', () => {
            this.modal.style.display = "none";
        });
        window.addEventListener('click', (event) => {
            if (event.target == this.modal) {
                this.modal.style.display = "none";
            }
        });
    }
}