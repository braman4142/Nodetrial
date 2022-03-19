// const http = require ("http");

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
//   });


// server.listen(9000, () => {
//    console.log("Server is running on port 9000");
// }); 

const express = require("express");

const server = express();

server.use("/about", (request, response) => {
  response.send("This isssss the About page");
});

server.use("/", (request, response) => {
  response.send("<h1>Welcome to the home page</h1>");
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});