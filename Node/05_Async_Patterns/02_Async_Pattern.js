const {readFile} = require('fs');

readFile('./first.txt', 'utf-8',(err,data)=>{
    if(err)
    {
        return
    }
    else
    {
        console.log(data);
    }
})


// Now in above code if want to create more function it will get into callback hell and very less readable we can convert this to a promise