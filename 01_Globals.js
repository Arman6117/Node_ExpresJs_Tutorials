// Global variables in Node 

//1] __dirname :- Path of the current directory
  console.log("Path of the current directory: "+__dirname+"\n");  
//D:\FullStack Webdev\NodeJs_ExpressJs\ExpressJs_Tutorials\Codes

//2] __filename :- File name
  console.log("File name: "+__filename+"\n");
// D:\FullStack Webdev\NodeJs_ExpressJs\ExpressJs_Tutorials\Codes\01_Globals.js

//3] module :- Info about current module
  console.log("Module: "+module+"\n"); //Don't have any module yet so it will be an empty array of objects

//4] require :- Function to use modules
  console.log("Require: "+require+"\n");// It is a function which takes path as an parameter and return that module 

//5] process :- Info about the environment where program is being executed
  console.log("Process: "+process+"\n")