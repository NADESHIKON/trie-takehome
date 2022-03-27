import { FastifyInstance, RequestGenericInterface } from "fastify";
import { ListKeywordReply } from "dto";

interface SuggestInterface extends RequestGenericInterface {
    Params: {
        prefix: string
    }
}

const suggest = async (fastify: FastifyInstance) => {
    fastify.get<SuggestInterface>("/suggest/:prefix", async (request, response) => {
        response.send(<ListKeywordReply>{
            code: 200,
            message: "Successfully retrieved the search keyword result",
            keywords: global.trie.search(request.params.prefix)
        });
    });
}

export default suggest;