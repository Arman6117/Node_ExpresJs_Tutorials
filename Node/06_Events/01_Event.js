const EventEmitter = require('events');

const CustomEmitter = new EventEmitter();

// There are 2 main functions in event class on and emit 
// on function decides on which event it should executes the code and emit function executes that event but in the argument event name should be same as we provided in on function

CustomEmitter.on('response', (name,id)=>{
    console.log(`Data received as ${name} and id: ${id}`);
})
CustomEmitter.on('response', ()=>{
    console.log(`Another response`);
}) 
// 1] We can as many events we want but place of emit function is imp


CustomEmitter.emit('response', 'Arman',25);
// 2] We can pass argument while emitting the event and access them as a property in emitter function