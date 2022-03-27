import fastify from "fastify";
import router from "./router";
import Trie from "./trie";

import fastifyRawBody from "fastify-raw-body";

const server = fastify({
    logger: process.env.NODE_ENV === "development"
});

const port = process.env.PORT || 3000;

server.register(fastifyRawBody, {
    field: "rawBody",
    encoding: "utf8",
    runFirst: true
});

server.register(router);

global.trie = new Trie();

if (process.env.NODE_ENV === "production") {
    server
        .listen(port, "0.0.0.0")
        .then(() => {
            console.log(`Server is currently listening on port ${port}`)
        });
}

export const trieApp = server;