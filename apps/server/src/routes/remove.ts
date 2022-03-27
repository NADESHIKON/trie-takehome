import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { RemoveKeywordReply } from "dto";

const remove = async (fastify: FastifyInstance) => {
    fastify.delete("/", async (request: FastifyRequest, response: FastifyReply) => {
        if (global.trie.remove((request.rawBody || "") as string)) { // If the request does not have a body, then the word is empty
            response.send(<RemoveKeywordReply>{
                code: 200,
                message: "The keyword has been successfully removed from the global state"
            });
        } else {
            response.send(<RemoveKeywordReply>{
                code: 400,
                message: "Cannot remove this keyword, please enter a valid input as the keyword"
            });
        }
    });
}

export default remove;