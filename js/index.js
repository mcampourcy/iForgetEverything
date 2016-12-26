var model = new Model();
var listView = new ListView(model);
var addView = new AddView(model);
var controller = new Controller(model, listView, addView);

/*
TODO : changes the close icon of the modal
TODO : improve the local storage
TODO : get rid of Bootstrap, and do a better look
TODO : add the edit part
 */