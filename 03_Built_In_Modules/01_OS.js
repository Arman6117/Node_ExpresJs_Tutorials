// OS Module is used to interact with the OS and server

const os = require('os');

// METHODS

//1] Get user info
  const user = os.userInfo();
  console.log(user+"\n");

//2] Get system uptime
  const time = os.uptime()
  console.log(time+"\n");

//3] Get System type
const type = os.type();
console.log(type+"\n");

//4] Get System release info
const release = os.release();
console.log(release+"\n");

//5] Get System total memory info
const totalmem = os.totalmem();
console.log(totalmem+"\n");

//5] Get System free memory info
const freemem = os.freemem();
console.log(freemem+"\n");