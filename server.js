const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//Error: UnhandledPromiseRejectionWarning: Error: connect ECONNREFUSED 127.0.0.1:3000