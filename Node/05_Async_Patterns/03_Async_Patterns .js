const { readFile } = require("fs");

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

getData("./first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
// We can make this code more readable and less messy by using async await 
