const { readFile, writeFile } = require("fs");
const util = require("util");

// WITHOUT USING WRAPPER FUNCTIONS
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);




const start = async()=>{
    try{
        const first = await readFilePromise('./first.txt');
        const second = await readFilePromise('./second.txt');
        console.log(first+"\n");
        console.log(second+"\n");
        await writeFilePromise('./third.txt','Hello this is third text file',{flag:'a'})
    }
    catch(err)
    {
      console.log(err);
    }
}

start();

// In the above application we use util package of node that have a function promisify which converts any function into a promise so we don't need to use promise function to wrap our code instead we can use factions that has been already promisified

