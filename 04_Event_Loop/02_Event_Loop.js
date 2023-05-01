// Started os process
console.log("First");
setTimeout(() => {
    console.log("Second");
}, 0); // Even if we set time out to zero it will be executed at the end because it is also an asynchronous method and event loop offloads it and when immediate code gets complete it will executes  
console.log("Third");
// Ended the os process