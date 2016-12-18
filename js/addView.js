function AddView(model) {
    this.model = model;
    this.init();
    this.bindListeners();
}

AddView.prototype = new EventEmitter();

AddView.prototype.init = function () {
    this.btnAdd = document.getElementById('addModalBtn');
    this.modal = document.getElementById('addModal');
    this.close = document.getElementsByClassName('close')[0];
    this.addForm = document.getElementById('addForm');
    this.input = document.getElementById('taskName');
};

AddView.prototype.bindListeners = function () {
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
};

AddView.prototype.display = function () {
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
};