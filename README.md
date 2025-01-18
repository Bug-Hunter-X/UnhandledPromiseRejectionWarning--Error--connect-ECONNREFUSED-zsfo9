# UnhandledPromiseRejectionWarning: Error: connect ECONNREFUSED

This repository demonstrates a common Node.js error: 'UnhandledPromiseRejectionWarning: Error: connect ECONNREFUSED'. This error typically occurs when your application tries to bind to a port that's already in use or is otherwise inaccessible.

## Problem

The provided `server.js` file contains a simple HTTP server.  If you run this server and then try to run it again immediately without stopping the first instance, you'll encounter the `ECONNREFUSED` error because the port is already occupied.

## Solution

The solution, found in `serverSolution.js`, addresses this by adding error handling. It gracefully checks if the port is available before attempting to bind, using a loop and a small delay to retry if the port is in use.