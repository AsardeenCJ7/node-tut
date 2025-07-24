const http = require("http");
const requestHandler = require("./route");

// A function to handle requests and send responses.
// The http.createServer() method.
// The listen() method to start the server.

const server = http.createServer(requestHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
