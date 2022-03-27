import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ListKeywordReply } from "@nadeshikon/trie-server-dto";

const list = async (fastify: FastifyInstance) => {
    fastify.get("/", async (request: FastifyRequest, response: FastifyReply) => {
        const keywords: string[] = global.trie.collect();
        response.send(<ListKeywordReply>{
            code: 200,
            message: "Successfully retrieved keywords",
            keywords: keywords
        });
    })
}

export default list;