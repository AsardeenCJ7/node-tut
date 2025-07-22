const http = require("http");

function requestListener(req, res) {
  console.log(res);
}

const server = http.createServer(requestListener); // requestListner is optional we can give them as arrow function
// and createServer method return server variable
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

