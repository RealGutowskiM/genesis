import { createServer } from "http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer();

server.listen( port, hostname, () => {
        console.log( `Server running at http://${hostname}:${port}/` );
} );