const { readFile, writeFile } = require("fs").promises;


// WITHOUT USING WRAPPER FUNCTIONS AND ANY OTHER PACKAGE


const start = async()=>{
    try{
        const first = await readFile('./first.txt');
        const second = await readFile('./second.txt');
        console.log(first+"\n");
        console.log(second+"\n");
        await writeFile('./third.txt',' Hello this is third text file',{flag:'a'})
    }
    catch(err)
    {
      console.log(err);
    }
}

start();

// In the above application instead of using any package we just simply added .promises property to our package this will convert all the functions from the package into a promise and they will function the same without any errors

