const { readFile } = require("fs");

//USING PROMISES AND ASYNC AWAIT
const getData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


const start = async()=>{
    try{
        const first = await getData('./first.txt');
        const second = await getData('./second.txt');
        console.log(first+"\n");
        console.log(second+"\n");
    }
    catch(err)
    {
      console.log(err);
    }
}

start()

// Inside start method we await the getData function so it will only executes when our promises get resolve and to avoid errors when promise get rejected we write our code inside try and catch block

// We can also avoid writing our wrapper function in case promises to make code more convenient