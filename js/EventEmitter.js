/**
 * EventEmitter : trigger events which anyon can listen
 */
class EventEmitter{
    constructor() {
        /* @type {{}} - functions to call */
        this.eventsMap = {};
    }
    /**
     * Associates callback to an existing or new event
     * @param name
     * @param callback
     */
    on(name, callback){
        // if eventsMap[name] undefined, []
        this.eventsMap[name] = this.eventsMap[name] || [];
        // associates event with callback
        this.eventsMap[name].push(callback);
        //result : on('LIST') => doSomething()
    }
    /**
     * Delete a existing callback from an event
     * @param name
     * @param callback
     */
    off(name, callback){
        // get the line of the callback from eventsMap
        var index = this.eventsMap[name].indexOf(callback);
        // remove the callback
        if(index > -1) this.eventsMap[name].splice(index, 1);
    }

    /**
     * Trigger the event and call all the callbacks linked
     * @param name
     * @param data
     */
    emit(name, data){
    if(this.eventsMap[name]){
        for(let callback of this.eventsMap[name]){
            callback(data) ;
        };
    }
};
}

