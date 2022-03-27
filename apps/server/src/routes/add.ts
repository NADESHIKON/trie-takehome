import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AddKeywordReply } from "@nadeshikon/trie-server-dto";

const add = async (fastify: FastifyInstance) => {
    fastify.put("/", async (request: FastifyRequest, response: FastifyReply) => {
        if (global.trie.insert((request.rawBody || "") as string)) { // If the request does not have a body, then the word is empty
            response.send(<AddKeywordReply>{
                code: 200,
                message: "The keyword has been successfully added to the global state"
            });
        } else {
            response.send(<AddKeywordReply>{
                code: 400,
                message: "Cannot add this keyword, please enter a valid input as the keyword"
            });
        }
    });
}

export default add;