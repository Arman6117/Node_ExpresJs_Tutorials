const {readFile} = require('fs');

console.log("Started the first task"); // FIRST OUTPUT

readFile('./first.txt', 'utf-8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }

    console.log(result); // THIRD OUTPUT
    console.log("Completed the first task"); // FOURTH OUTPUT

})
console.log("Starting the next task"); // SECOND OUTPUT


/*
   Event loop will offload the readfile method because it is a asynchronous method and it will execute other immediate code and then after that when we get our result or an error it will be executed
*/