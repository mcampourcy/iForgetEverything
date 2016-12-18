var model = new Model();
var listView = new ListView(model);
var addView = new AddView(model);
var controller = new Controller(model, listView, addView);