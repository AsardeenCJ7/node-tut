const http = require("http");
const fs = require("fs");

// A function to handle requests and send responses.
// The http.createServer() method.
// The listen() method to start the server.

const server = http.createServer((req, res) => {
  console.log(req.url); // URL requested by the client - browser is a client
  //process.exit(); // Stop the event loop
  console.log(req.method); // Default GET Method
  console.log(req.headers); // common host, connection, dnt, accept, cookie
  //   process.exit();

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form - Inxcode</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type = "text" placeholder ="Enter Your User Name"  name = "message"> <input type="submit" value="Submit"></form></body>'
    );
    res.write("<html>");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    fs.writeFileSync("Hello.txt", "Dummy");
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>inxcode Tutorial</title></head>");
  res.write("<body><h1>Hello World! from Node.js Server</h1></body>");
  res.write("<html>");
  res.end();
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
