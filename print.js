const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    // Collect chunks of incoming data
    req.on("data", (chunk) => {
      body.push(chunk); // Store each chunk in the body array
    });

    // When all data is received
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // Combine and convert buffer to string
      const message = parsedBody.split("=")[1]; // Extract value from 'message=yourText'
      fs.writeFileSync("Hello.txt", message); // Save the message to a file

      // Redirect user to home page after saving
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    // Fallback response for other requests
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from Node.js server!</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
