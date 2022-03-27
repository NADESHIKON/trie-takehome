import { FastifyInstance, RequestGenericInterface } from "fastify";
import { SearchKeywordReply } from "dto";

interface SearchInterface extends RequestGenericInterface {
    Params: {
        word: string
    }
}

const search = async (fastify: FastifyInstance) => {
    fastify.get<SearchInterface>("/search/:word", async (request, response) => {
        response.send(<SearchKeywordReply>{
            code: 200,
            message: "Successfully retrieved the search keyword result",
            exists: global.trie.includes(request.params.word)
        });
    });
}

export default search;