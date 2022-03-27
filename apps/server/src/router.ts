import { FastifyInstance } from "fastify";
import add from "./routes/add";
import search from "./routes/search";
import list from "./routes/list";
import remove from "./routes/remove";
import suggest from "./routes/suggest";

const router = async (fastify: FastifyInstance) => {
    fastify.register(add);
    fastify.register(search)
    fastify.register(list)
    fastify.register(remove)
    fastify.register(suggest)
}

export default router;