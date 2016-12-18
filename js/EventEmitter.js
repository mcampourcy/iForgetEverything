/**
 * EventEmitter : trigger events which anyon can listen
 * @constructor
 */
function EventEmitter(){
    /* @type {{}} - functions to call */
    this.eventsMap = {};
}

/**
 * Associates callback to an existing or new event
 * @param name
 * @param callback
 */
EventEmitter.prototype.on = function (name, callback) {
    // if eventsMap[name] undefined, []
    this.eventsMap[name] = this.eventsMap[name] || [];
    // associates event with callback
    this.eventsMap[name].push(callback);
    //result : on('LIST') => doSomething()
};

/**
 * Delete a existing callback from an event
 * @param name
 * @param callback
 */
EventEmitter.prototype.off = function (name, callback) {
    // get the line of the callback from eventsMap
    var index = this.eventsMap[name].indexOf(callback);
    // remove the callback
    if(index > -1) this.eventsMap[name].splice(index, 1);
};

/**
 * Trigger the event and call all the callbacks linked
 * @param name
 * @param data
 */
EventEmitter.prototype.emit = function (name, data) {
    if(this.eventsMap[name]){
        this.eventsMap[name].forEach(function (callback) {
           callback(data) ;
        });
    }
};