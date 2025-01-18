const http = require('http');

const port = 3000;

function startServer() {
  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Retrying in 1 second...`);
      setTimeout(startServer, 1000);
    } else {
      console.error(`Server error:`, err);
    }
  });

  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

startServer();