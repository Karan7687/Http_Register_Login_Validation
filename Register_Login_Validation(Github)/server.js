const http = require("http");
const port = process.env.PORT || 3000;

const x = require("./app");

const server = http.createServer(x);

server.listen(port);

console.log("Server Pass");
